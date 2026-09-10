const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE);
const source = path.join(__dirname, 'source');
async function tabTo(page, selector) {
  const cap = await page.locator('a[href], button, input, select, textarea').count() + 5;
  for (let i = 0; i < cap; i++) {
    await page.keyboard.press('Tab');
    if (await page.locator(selector).evaluate(el => el === document.activeElement)) return;
  }
  throw new Error(`Keyboard did not reach ${selector}`);
}
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
  const report = { capturedAt: new Date().toISOString(), node: process.version, browser: browser.version(), sourceHashes: {}, observations: [], boundary: 'Current saved page only. Email default action is prevented after site handlers; no email client, analytics transmission, screen reader or historical snapshot is tested.' };
  for (const name of ['zh.html', 'site.js', 'style.css']) report.sourceHashes[name] = crypto.createHash('sha256').update(fs.readFileSync(path.join(source, name))).digest('hex');
  try {
    for (const width of [320, 1280]) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: 'light' });
      await context.route(/^https?:/, r => r.abort());
      const page = await context.newPage();
      await page.goto(pathToFileURL(path.join(source, 'zh.html')).href);
      await page.evaluate(() => {
        window.testClicks = 0;
        window.testAnalytics = [];
        document.getElementById('theme-toggle').addEventListener('click', () => window.testClicks++);
        window.gtag = (...args) => window.testAnalytics.push(args);
        document.addEventListener('click', e => { if (e.target.closest('a[href^="mailto:"]')) e.preventDefault(); });
      });
      await tabTo(page, '#theme-toggle');
      for (const [key, expectedTheme, expectedClicks] of [['Enter', 'dark', 1], ['Space', 'light', 2]]) {
        await page.keyboard.press(key);
        const result = await page.evaluate(() => ({ theme: document.documentElement.getAttribute('data-theme'), pressed: document.getElementById('theme-toggle').getAttribute('aria-pressed'), clicks: window.testClicks }));
        report.observations.push({ width, action: key, ...result });
        assert.equal(result.theme, expectedTheme);
        assert.equal(result.pressed, String(expectedTheme === 'dark'));
        assert.equal(result.clicks, expectedClicks);
      }
      await tabTo(page, 'main a[href^="mailto:"]');
      await page.keyboard.press('Enter');
      const events = await page.evaluate(() => window.testAnalytics);
      report.observations.push({ width, action: 'Email link Enter', events });
      assert.deepEqual(events, [['event', 'contact_email_click']]);
      await context.close();
    }
    report.passed = true;
  } catch (error) {
    report.passed = false;
    report.error = error.message;
    process.exitCode = 1;
  } finally {
    await browser.close();
    fs.writeFileSync(path.join(__dirname, 'result.json'), JSON.stringify(report, null, 2) + '\n');
  }
  console.log(JSON.stringify(report, null, 2));
})().catch(error => { console.error(error); process.exitCode = 2; });

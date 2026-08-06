// Layout gate: assert no horizontal scroll at each width. Run: node sweep.js
const { chromium } = require('playwright-core');
const widths = [320, 768, 1024, 1280, 1440, 1742, 1920];
const pages = ['file:///C:/Code/chiehweihuang.github.io/index.html'];
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  let fail = 0;
  for (const url of pages) {
    const page = await browser.newPage();
    for (const w of widths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(url);
      const r = await page.evaluate(() => ({
        sw: document.documentElement.scrollWidth,
        cw: document.documentElement.clientWidth,
      }));
      const ok = r.sw <= r.cw;
      if (!ok) fail++;
      console.log(`${ok ? 'PASS' : 'FAIL'} ${w}px sw=${r.sw} cw=${r.cw}`);
    }
    await page.close();
  }
  await browser.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e.message); process.exit(2); });

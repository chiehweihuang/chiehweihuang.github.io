// Screenshots: light/dark desktop + mobile. Run: node shot.js
const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1400 });
  await page.goto('file:///C:/Code/chiehweihuang.github.io/index.html');
  await page.screenshot({ path: 'index-1280.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 800 });
  await page.screenshot({ path: 'index-375.png', fullPage: true });
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.setViewportSize({ width: 1280, height: 1400 });
  await page.screenshot({ path: 'index-1280-dark.png', fullPage: true });
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(2); });

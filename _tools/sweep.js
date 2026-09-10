// Layout gate: assert no horizontal scroll at each width. Run: node sweep.js
const { chromium } = require('playwright-core');
const widths = [320, 768, 1024, 1280, 1440, 1742, 1920];
const pages = [
  'index.html', 'zh.html', 'work.html', 'zh-work.html', 'cases.html',
  'zh-cases.html', 'research.html', 'zh-research.html', 'futures.html',
  'zh-futures.html', 'about.html', 'zh-about.html', 'accessibility.html', 'map.html'
].map(name => `file:///C:/Code/chiehweihuang.github.io/${name}`);
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  let fail = 0;
  for (const url of pages) {
    const page = await browser.newPage();
    for (const w of widths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto(url);
      const r = await page.evaluate(() => {
        const overflowing = [...document.querySelectorAll('body *:not(svg):not(svg *)')].filter(el => el.scrollWidth > el.clientWidth + 1).map(el => el.tagName + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().replace(/\s+/g, '.') : '')).slice(0, 5);
        return { sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, overflowing };
      });
      const ok = r.sw <= r.cw && r.overflowing.length === 0;
      if (!ok) fail++;
      console.log(`${ok ? 'PASS' : 'FAIL'} ${new URL(url).pathname.split('/').pop()} ${w}px sw=${r.sw} cw=${r.cw}${r.overflowing.length ? ` overflow=${r.overflowing.join(',')}` : ''}`);
    }
    await page.setViewportSize({ width: 768, height: 900 });
    await page.goto(url);
    await page.evaluate(() => { document.documentElement.style.zoom = '2'; });
    const zoom = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
    const zoomOk = zoom.sw <= zoom.cw;
    if (!zoomOk) fail++;
    console.log(`${zoomOk ? 'PASS' : 'FAIL'} ${new URL(url).pathname.split('/').pop()} 200% zoom sw=${zoom.sw} cw=${zoom.cw}`);
    await page.close();
  }
  await browser.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e.message); process.exit(2); });

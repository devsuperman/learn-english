// End-to-end check of the built site. Run against `npm run preview`:
//
//   npm run build && npm run preview   # in one terminal
//   npm run verify                     # in another
//
// Requires Playwright with Chromium (`npm i -D playwright && npx playwright install chromium`
// if it isn't available globally). Override the URL with BASE_URL=...
//
// Checks:
//   1. Every internal page is reachable (no broken links) and has no JS errors.
//   2. Every <Quiz> accepts its correct option, and every accepted <FixIt> answer is marked correct.
//   3. <Say> buttons are visible and pass their text to speech synthesis.
//   4. No page scrolls horizontally at phone width (390px).
const { chromium } = require('playwright');

const BASE = process.env.BASE_URL ?? 'http://localhost:4321/learn-english/';
const origin = new URL(BASE).origin;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.addInitScript(() => {
    window.__spoken = [];
    if ('speechSynthesis' in window) speechSynthesis.speak = (u) => window.__spoken.push(u.text);
  });
  const problems = [];
  page.on('pageerror', (e) => problems.push(`JS error on ${page.url()}: ${e.message}`));

  // 1. Crawl
  const seen = new Set();
  const queue = [BASE];
  while (queue.length) {
    const url = queue.shift();
    if (seen.has(url)) continue;
    seen.add(url);
    const res = await page.goto(url);
    if (!res || res.status() >= 400) {
      problems.push(`Broken link: ${url} (${res?.status()})`);
      continue;
    }
    for (const href of await page.$$eval('a[href]', (as) => as.map((a) => a.href))) {
      const u = href.split('#')[0];
      if (u.startsWith(origin) && !seen.has(u)) queue.push(u);
    }
  }

  // 2 + 3. Exercises and listen buttons
  let answers = 0;
  let sayButtons = 0;
  for (const url of seen) {
    await page.goto(url);
    for (const q of await page.locator('quiz-question').all()) {
      await q.locator('.quiz-option').nth(Number(await q.getAttribute('data-answer'))).click();
      if ((await q.locator('.exercise-feedback').textContent()) !== 'Correct!')
        problems.push(`Quiz answer rejected on ${url}`);
      answers++;
    }
    for (const f of await page.locator('fix-it').all()) {
      for (const a of JSON.parse(await f.getAttribute('data-answers'))) {
        await f.locator('input').fill(a);
        await f.locator('button[type=submit]').click();
        if ((await f.locator('.exercise-feedback').textContent()) !== 'Correct!')
          problems.push(`FixIt answer rejected on ${url}: "${a}"`);
        answers++;
      }
    }
    for (const s of await page.locator('say-it').all()) {
      const button = s.locator('.say-button');
      if (!(await button.isVisible())) { problems.push(`Hidden Say button on ${url}`); continue; }
      await button.click();
      const spoken = await page.evaluate(() => window.__spoken.at(-1));
      if (spoken !== (await s.getAttribute('data-text'))) problems.push(`Say mismatch on ${url}`);
      sayButtons++;
    }
  }

  // 4. Mobile overflow
  await page.setViewportSize({ width: 390, height: 844 });
  for (const url of seen) {
    await page.goto(url);
    if (await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth))
      problems.push(`Horizontal scroll at 390px: ${url}`);
  }

  await browser.close();
  console.log(`Pages: ${seen.size} · exercise answers: ${answers} · listen buttons: ${sayButtons}`);
  if (problems.length) {
    console.error(problems.join('\n'));
    process.exit(1);
  }
  console.log('All checks passed.');
})();

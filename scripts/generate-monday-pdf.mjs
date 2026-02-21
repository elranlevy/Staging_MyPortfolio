import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'Monday-CaseStudy.pdf');
const BASE_URL = 'http://localhost:5173/Staging_MyPortfolio/';

async function startDevServer() {
  return new Promise((resolve) => {
    const proc = spawn('npm', ['run', 'dev'], { cwd: ROOT, stdio: 'pipe', shell: true });
    let resolved = false;

    const onData = (data) => {
      if (!resolved && data.toString().includes('localhost')) {
        resolved = true;
        resolve(proc);
      }
    };

    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    setTimeout(() => { if (!resolved) { resolved = true; resolve(proc); } }, 10000);
  });
}

async function waitForIdle(page, ms = 1500) {
  await page.evaluate((t) => new Promise((r) => setTimeout(r, t)), ms);
}

async function unlockScrollContainers(page) {
  await page.evaluate(() => {
    document.querySelectorAll('.h-dvh').forEach((el) => {
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    });
    document.querySelectorAll('.h-full.overflow-y-auto').forEach((el) => {
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    });
  });
}

async function forceAllVisible(page) {
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach((el) => {
      const cs = window.getComputedStyle(el);
      el.style.animation = 'none';
      el.style.transition = 'none';
      if (parseFloat(cs.opacity) < 1) el.style.opacity = '1';
      if (cs.transform !== 'none' && cs.transform !== 'matrix(1, 0, 0, 1, 0, 0)') {
        el.style.transform = 'none';
      }
    });
  });
}

async function scrollToLoadAll(page) {
  await page.evaluate(async () => {
    const distance = 600;
    const delay = 150;
    let scrolled = 0;
    const totalHeight = document.body.scrollHeight;
    while (scrolled < totalHeight) {
      window.scrollBy(0, distance);
      scrolled += distance;
      await new Promise((r) => setTimeout(r, delay));
    }
    window.scrollTo(0, 0);
  });
  await waitForIdle(page, 500);
}

async function main() {
  console.log('Starting dev server...');
  const devServer = await startDevServer();
  console.log('Dev server ready.\n');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    console.log('Loading site...');
    await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
    await waitForIdle(page, 2000);

    console.log('Navigating to Monday case study...');
    await page.evaluate(() => {
      window.history.pushState({ page: 'monday' }, '');
      window.dispatchEvent(new PopStateEvent('popstate', { state: { page: 'monday' } }));
    });
    await waitForIdle(page, 3000);

    console.log('Preparing page for capture...');
    await unlockScrollContainers(page);
    await waitForIdle(page, 500);

    await scrollToLoadAll(page);
    await waitForIdle(page, 1000);

    await scrollToLoadAll(page);

    await forceAllVisible(page);
    await waitForIdle(page, 500);

    await page.evaluate(() => {
      document.querySelectorAll('button').forEach((btn) => {
        if (btn.textContent.includes('Back')) btn.style.display = 'none';
      });
    });

    console.log('Generating PDF...');
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    });

    await fs.writeFile(OUTPUT, pdf);

    const sizeMB = (pdf.length / 1024 / 1024).toFixed(1);
    console.log(`\n✅ PDF saved: ${OUTPUT}`);
    console.log(`   Size: ${sizeMB} MB`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
    devServer.kill();
  }
}

main();

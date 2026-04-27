import { chromium } from 'playwright';
import fs from 'fs';

async function run() {
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const viewports = [
    { name: 'desktop', width: 1280, height: 720 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  for (const vp of viewports) {
    console.log(`Capturing ${vp.name}...`);
    await page.setViewportSize({ width: vp.width, height: vp.height });
    try {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
      await page.screenshot({ path: `screenshots/review-1-${vp.name}.png`, fullPage: true });
      console.log(`Captured ${vp.name} screenshot`);
    } catch (e) {
      console.error(`Failed to capture ${vp.name}: ${e.message}`);
    }
  }

  await browser.close();
}

run();

import { chromium, firefox, webkit } from 'playwright';


export const load = async () => {
    const browser = await chromium.launch({
        headless: false,
        args: [
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
        ]
        // devtools: true
    });
    const context = await browser.newContext({});
    const page = await context.newPage();

    await page.goto("https://google.com");

    await page.close();
};
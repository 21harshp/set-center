import { test, expect } from '@playwright/test'

test('first', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');
    await page.locator('#normal_login_username').fill('123456');
    await page.locator('#normal_login_password').fill('sgdjfgskdfh');
    await page.locator('#normal_login_password').press('Enter');
    // await page.waitForTimeout(5000);

    // get text from div
    const elements = await page.locator('.ant-typography.css-j9bb5n').innerText();
    const abc = elements

    // Iterate through each element and verify its text content
    for (const element of abc) {
        const textContent = await element.textContent();
        console.log(`Element text: ${textContent}`);
    }
})
import { test, expect } from '@playwright/test';

test('login with valid credantials', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();

    // const DriverID = await page.locator('.ant-picker-input').textContent();
    // console.log({DriverID});

    await page.locator('.ant-picker-input').click();
    await page.getByTitle('2024-06-05').click();

  await page.waitForTimeout(2000);
});

test('Verify Toaster message', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();

    const products = await page.locator('.ant-table-row.ant-table-row-level-0')
    await products.nth(2).click()
    const tosterMessage = await page.locator("//div[@role='status']").textContent()
    await expect(tosterMessage).toContain('入荷済をしました。')
    await products.nth(3).click()
    await page.waitForTimeout(1500)
    await products.nth(4).click()
    await page.waitForTimeout(1500)
    await products.nth(5).click()
    await page.waitForTimeout(1500)
    await products.nth(6).click()
    await page.waitForTimeout(1500)
    await products.nth(1).click()
    await page.waitForTimeout(1500)
    await products.nth(7).click()
    await page.waitForTimeout(2000)

    const textColor = await page.evaluate(() => {
        const element = document.querySelector('div');
        return getComputedStyle(element).color;
      });
    
})



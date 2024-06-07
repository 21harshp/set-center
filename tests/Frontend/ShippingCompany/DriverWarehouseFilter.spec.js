import { test, expect } from '@playwright/test';

test('Verify default selection displays data for all warehouses	', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)

    const warehouseLocator1 = await page.locator('.ant-select-selection-overflow-item').nth(0);
    const warehouseLocator2 = await page.locator('.ant-select-selection-overflow-item').nth(1);
    const warehouseLocator3 = await page.locator('.ant-select-selection-overflow-item').nth(2);
    const warehouseLocator4 = await page.locator('.ant-select-selection-overflow-item').nth(3);
    const warehouseLocator5 = await page.locator('.ant-select-selection-overflow-item').nth(4);
    // await page.waitForSelector('.ant-select-selection-overflow-item', { state: 'visible' });
    await expect(warehouseLocator1, warehouseLocator2, warehouseLocator3, warehouseLocator4, warehouseLocator5).toBeVisible();

})

test('Verify data display for selected warehouse from dropdown	', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)

   const closeButtons = page.locator('.anticon.anticon-close');
   await closeButtons.nth(0).click();
   await page.waitForTimeout(2000)
   await closeButtons.nth(1).click();
   await page.waitForTimeout(2000)
   await closeButtons.nth(2).click();
   await page.waitForTimeout(2000)
   await closeButtons.nth(3).click();
   await page.waitForTimeout(2000)
    // const count = await closeButtons.count();

    // for (let index = 0; index < count; index++) {
    //     await closeButtons.nth(index).click();
    // }ant-select-selection-overflow

})

test('Add ', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)

    const warehouseLocator1 = await page.locator('.ant-select-selection-overflow-item').nth(0).textContent();
    console.log(warehouseLocator1);

    const werehouse = page.locator('.ant-select-selection-overflow').nth(0)
    await werehouse.click()
    await page.waitForTimeout(2000)
    await page.locator('.ant-select-item-option-content').nth(0).click()
    await page.waitForTimeout(2000)
    
})
console.log('hello');

test('Verify data is updated when selecting different warehouse', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)

    const warehouseLocator1 = await page.locator('.ant-select-selection-overflow-item').nth(0);
    const warehouseLocator2 = await page.locator('.ant-select-selection-overflow-item').nth(1);
    const warehouseLocator3 = await page.locator('.ant-select-selection-overflow-item').nth(2);
    const warehouseLocator4 = await page.locator('.ant-select-selection-overflow-item').nth(3);
    const warehouseLocator5 = await page.locator('.ant-select-selection-overflow-item').nth(4);
    // await page.waitForSelector('.ant-select-selection-overflow-item', { state: 'visible' });
    await expect(warehouseLocator1, warehouseLocator2, warehouseLocator3, warehouseLocator4, warehouseLocator5).toBeVisible();

})

test('Verify data is consistent with selected warehouse', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)

    const warehouseLocator1 = await page.locator('.ant-select-selection-overflow-item').nth(0);
    const warehouseLocator2 = await page.locator('.ant-select-selection-overflow-item').nth(1);
    const warehouseLocator3 = await page.locator('.ant-select-selection-overflow-item').nth(2);
    const warehouseLocator4 = await page.locator('.ant-select-selection-overflow-item').nth(3);
    const warehouseLocator5 = await page.locator('.ant-select-selection-overflow-item').nth(4);
    // await page.waitForSelector('.ant-select-selection-overflow-item', { state: 'visible' });
    await expect(warehouseLocator1, warehouseLocator2, warehouseLocator3, warehouseLocator4, warehouseLocator5).toBeVisible();

})

test.skip('Verify text color change after clicking on goods data	', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();

    const products = await page.locator('.ant-table-row.ant-table-row-level-0').nth(0)
    
    await products.click()
    // const tosterMessage = await page.locator("//div[@role='status']").textContent()
    // await expect(tosterMessage).toContain('入荷済をしました。')
    await page.waitForTimeout(2000)

    // const textColor = await page.evaluate((products) => {
    //     const element = document.querySelector(products);
    //         return getComputedStyle(element).color;
    //   });
    const textColor = await products.evaluate((element) => {
        return window.getComputedStyle(element).color;
    });
    
      console.log(textColor);
    
})



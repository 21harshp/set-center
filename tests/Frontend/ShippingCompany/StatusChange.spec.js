import { test, expect } from '@playwright/test'
import { DriverID, DriverPassword, ShippingURL } from '../setup';


test('Verify to change status', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill(DriverPassword);
    await page.getByRole('button', { name: 'ログイン' }).click();

    await page.getByPlaceholder('日付を選択').click();
    await page.locator('.ant-picker-header-prev-btn').click();
    await page.waitForTimeout(1000);
    await page.locator('.ant-picker-header-prev-btn').click();
    await page.waitForTimeout(1000);
    await page.locator('.ant-picker-header-prev-btn').click();
    await page.waitForTimeout(1000);
    await page.locator('.ant-picker-header-prev-btn').click();
    await page.waitForTimeout(1000);
    await page.locator('.ant-picker-header-prev-btn').click();
    await page.waitForTimeout(1000);
    await page.getByTitle('-02-02').locator('div').click();

    const products = await page.locator('.ant-table-row.ant-table-row-level-0')
    await products.nth(3).click()
    const tosterMessage = await page.locator("//div[@role='status']").textContent()
    // await expect(tosterMessage).toContain('入荷済をしました。')


    const element = await page.locator('.ant-table-cell').nth(11);

    const backgroundColor = await element.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return styles.backgroundColor;
    });

    
});


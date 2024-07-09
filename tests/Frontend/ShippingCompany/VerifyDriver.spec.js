import { test, expect } from '@playwright/test';
import { DriverID, DriverPassword, ShippingURL } from '../setup';

test('Verify that the currently displayed ID is the ID of the driver who has logged in.', async ({ page }) => {

    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill('Harsh1');
    await page.locator('#normal_login_password').fill("      ");
    await page.getByRole('button', { name: 'ログイン' }).click();

    const DID = await page.locator("div[class='ant-flex css-1okl62o'] article:nth-child(2)")
    await expect(DID).toHaveText('Harsh1');
});

test.skip('Verify date display format', async ({ page }) => {

    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill(DriverPassword);
    await page.getByRole('button', { name: 'ログイン' }).click();

    const datePickerElement = await page.locator('.ant-picker-input');
    const dateInput = await datePickerElement.locator('input');  // Assuming there's a nested input

    const DateText = await dateInput.inputValue();
    

});

test('Verify that the currently displayed ID is the ID of the driver who has logged .', async ({ page }) => {

    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill('Harsh1');
    await page.locator('#normal_login_password').fill("      ");
    await page.getByRole('button', { name: 'ログイン' }).click();

    const DID = await page.locator("div[class='ant-flex css-1okl62o'] article:nth-child(2)")
    await expect(DID).toHaveText('Harsh1');
});

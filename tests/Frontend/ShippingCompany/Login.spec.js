import { test, expect } from "@playwright/test";
import { IDandPasswordDoseNotMatch, LoginFail, sucessLogin } from "../../Backend/Message";
import { DriverID, DriverPassword, ShippingURL } from "../setup";

test('Login with valid credentials', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill(DriverPassword);
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator("//div[@role='status']").textContent()
    // console.log(message);
    await expect(message).toBe(sucessLogin)
    //div[@role='status']
});

test('Login with invalid password (less than 6 characters)', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill('12345');
    const errMsg = await page.locator('.ant-form-item-explain-error').textContent()
    // console.log(errMsg);
    await expect(errMsg).toBe('最低6桁必要')
    await page.getByRole('button', { name: 'ログイン' }).click();
});

test('Login with valid password (more than 6 characters)', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill(DriverPassword);
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator("//div[@role='status']").textContent()
    // console.log(message);
    await expect(message).toBe(sucessLogin)
    //div[@role='status']
});

test('Login with blank password', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill('Harsh1');
    await page.locator('#normal_login_password').fill("");
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator(".ant-form-item-explain-error").textContent()
    // console.log(message);
    await expect(message).toBe('パスワード必須')
    //div[@role='status']
});

test('Login with valid credentials but incorrect username', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill('Harsh10');
    await page.locator('#normal_login_password').fill("      ");
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator("//div[@role='status']").textContent()
    // console.log(message);
    await expect(message).toBe(LoginFail)
    //div[@role='status']
});

test('Login with valid username but incorrect password	', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill('password');
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator("//div[@role='status']").textContent()
    // console.log(message);
    await expect(message).toBe(IDandPasswordDoseNotMatch)
    //div[@role='status']
});

test('Login with mixed case valid credentials', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill(DriverPassword);
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator("//div[@role='status']").textContent()
    // console.log(message);
    await expect(message).toBe(sucessLogin)
    //div[@role='status']
});

test('Login with special characters in password	', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill(DriverID);
    await page.locator('#normal_login_password').fill(DriverPassword);
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator("//div[@role='status']").textContent()
    // console.log(message);
    await expect(message).toBe(sucessLogin)
    //div[@role='status']
});

test('Login with leading and trailing spaces in password', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill('Harsh001');
    await page.locator('#normal_login_password').fill("Harsh 2142");
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator("//div[@role='status']").textContent()
    // console.log(message);
    await expect(message).toBe(sucessLogin)
    //div[@role='status']
});

test('Login with all spaces in password	', async ({ page }) => {
    await page.goto(ShippingURL);
    await page.locator('#normal_login_loginId').fill('Harsh1');
    await page.locator('#normal_login_password').fill("      ");
    await page.getByRole('button', { name: 'ログイン' }).click();
    const message = await page.locator(".ant-form-item-explain-error").textContent()
    // console.log(message);
    await expect(message).toBe('パスワード必須')
    //div[@role='status']
});
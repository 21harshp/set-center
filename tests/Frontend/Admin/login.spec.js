import { test, expect } from '@playwright/test'
import { AdminID, AdminPassword, AdminURL } from '../setup';

test('Verify login with valid predefined ID and password', async ({ page }) => {
    await page.goto(AdminURL);

    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/csv-upload')

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('ログイン成功');
})


test('Verify login with invalid ID	', async ({ page }) => {
    await page.goto(AdminURL);

    await page.locator('#normal_login_email').fill('teste.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');
    const errorMsg = await page.locator("//div[@role='status']").textContent();
    expect(errorMsg).toBe('ログインに失敗しました')
})

test('Verify login with invalid password	', async ({ page }) => {
    await page.goto(AdminURL);

    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill('Harsh12');
    await page.locator('#normal_login_password').press('Enter');
    const errorMsg = await page.locator("//div[@role='status']").textContent();
    expect(errorMsg).toBe('ログインに失敗しました')
})

test('Verify password validation for less than 6 characters	', async ({ page }) => {
    await page.goto(AdminURL);

    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill('Harsh');
    await page.locator('#normal_login_password').press('Enter');
    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('パスワードは6文字以上である必要があります');
})

test('Verify login with password more than 6 characters	', async ({ page }) => {
    await page.goto(AdminURL);

    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('ログイン成功');
})

test('Verify login when ID field is left empty	', async ({ page }) => {
    await page.goto(AdminURL);

    await page.locator('#normal_login_email').fill('');
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('メールアドレスを入力してください');
})

test('Verify login when password field is left empty		', async ({ page }) => {
    await page.goto(AdminURL);

    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill('');
    await page.locator('#normal_login_password').press('Enter');

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('パスワードを入力してください');
})
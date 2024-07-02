import { test, expect } from '@playwright/test'

test('Verify login with valid predefined ID and password', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('tester.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill('Harsh123');
    await page.locator('#normal_login_password').press('Enter');
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/')

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('ログイン成功');
})
//hello

test('Verify login with invalid ID	', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('teste.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill('Harsh123');
    await page.locator('#normal_login_password').press('Enter');
    const errorMsg = await page.locator("//div[@role='status']").textContent();
    expect(errorMsg).toBe('ログインに失敗しました')
})

test('Verify login with invalid password	', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('tester.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill('Harsh12');
    await page.locator('#normal_login_password').press('Enter');
    const errorMsg = await page.locator("//div[@role='status']").textContent();
    expect(errorMsg).toBe('ログインに失敗しました')
})

test('Verify password validation for less than 6 characters	', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('tester.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill('Harsh');
    await page.locator('#normal_login_password').press('Enter');
    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('最低6桁必要');
})

test('Verify login with password more than 6 characters	', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('tester.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill('Harsh123');
    await page.locator('#normal_login_password').press('Enter');

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('ログイン成功');
})

test('Verify login when ID field is left empty	', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('');
    await page.locator('#normal_login_password').fill('Harsh123');
    await page.locator('#normal_login_password').press('Enter');

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('ドライバーID必須');
})

test('Verify login when password field is left empty		', async ({ page }) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('tester.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill('');
    await page.locator('#normal_login_password').press('Enter');

    const errorMsg = await page.locator(".ant-form-item-explain-error").textContent();
    expect(errorMsg).toBe('パスワード必須');
})
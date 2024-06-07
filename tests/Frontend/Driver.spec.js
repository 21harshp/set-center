import { test, expect } from "@playwright/test";

test('try to login without id password', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');
    await page.locator('#normal_login_username').click()
    await page.locator('#normal_login_password').click()
    await page.getByRole('button', {name: 'ログイン'}).click()
    await page.waitForTimeout(3000);

    const UserEmptyError = await page.textContent('text=ID必須');
    const PasswordEmptyError = await page.textContent('text=パスワード必須');

   expect(UserEmptyError).toBe('ID必須');
   expect(PasswordEmptyError).toBe('パスワード必須'); 
})

test.only('driver login page', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle('セットセンター');

    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('#normal_login_password').press('Enter');

    const articleElement = await page.locator('.ant-typography.css-1okl62o').nth(1)
    const articleText = await articleElement.textContent();
    expect(articleText).toBe('１４４４５６７８９０１3');
   

    const today = new Date();
    const day = today.getDate();
    await page.locator('.ant-picker-input').click()
    await page.waitForTimeout(1000);
    await page.getByText(day).click(); 
    // await page.getByText(30).click();
    await page.waitForTimeout(1000);
    await page.locator('.ant-table-cell').nth(5).click()
    const toster = await page.getByText('入荷済をしました。');
    await page.waitForTimeout(1000);
    expect(toster).toBeVisible();

    await page.locator('.ant-select-selector').nth(0).click()

    await page.waitForTimeout(5000);

})
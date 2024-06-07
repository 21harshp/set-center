import { test, expect } from '@playwright/test';



test('login with valid credantials', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)
});

test('Login with invalid password (less than 6 characters)', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('1236');

    // verify error message
    const divText = await page.innerText('.ant-form-item-explain-error');
    // await expect(divText).toBe('最低6桁必要');
    await expect(divText).toBe('最低6個必要');
    
    await page.locator('button[type="submit"]').click();

    await expect(page).not.toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)

});

test('Login with valid password (more than 6 characters)', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456789');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)
});

test('Login with blank password', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('');
    await page.locator('#normal_login_password').fill('');
    await page.locator('button[type="submit"]').click();

    const DriverID = await page.innerText('#normal_login_username_help');
    const DriverPassword = await page.innerText('#normal_login_password_help');

    await expect(DriverID).toBe('ドライバーID必須')
    await expect(DriverPassword).toBe('パスワード必須')
    
    // await expect(divText).toBe('最低6桁必要');

    await page.waitForTimeout(2000);
});

test('Login with valid credentials but incorrect username', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();

    const DriverID = await page.innerText('#normal_login_username_help');
    await expect(DriverID).toBe('ドライバーID必須')

    await page.waitForTimeout(2000)
})

test('Login with valid username but incorrect password', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('');
    await page.locator('#normal_login_password').fill('123');
    await page.locator('button[type="submit"]').click();

    const DriverID = await page.innerText('#normal_login_username_help');
    const DriverPassword = await page.innerText('#normal_login_password_help');

    await expect(DriverPassword).toBe('最低6個必要')
    
    // await expect(divText).toBe('最低6桁必要');

    await page.waitForTimeout(2000);
});

test('Login with mixed case valid credentials', async ({ page }) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');

    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('123456');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    await page.waitForTimeout(2000)

});

test.skip('Verify that the currently displayed ID is the ID of the driver who has logged in.', async ({page}) => {
    await page.goto('https://set-center-mobile.netlify.app/auth/login');
    await expect(page).toHaveTitle('セットセンター');
    await page.locator('#normal_login_username').fill('Username_123');
    await page.locator('#normal_login_password').fill('harsh  21');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://set-center-mobile.netlify.app/');
    //get user ID from driverapp
    const DriverId = await page.locator('.ant-typography.css-1okl62o').nth(1).textContent();
    await expect(DriverId).toBe('１４４４５６７８９０１3')
    
});






import {test, expect} from '@playwright/test'

test('Password Reset', async ({page}) => {
    await page.goto('https://hq.dev.tako-syun.com/');

    await page.locator('#normal_login_email').fill('tester.softcolon@gmail.com');
    await page.locator('#normal_login_password').fill('Harsh123');
    await page.locator('#normal_login_password').press('Enter');
})
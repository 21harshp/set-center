import {test,expect} from '@playwright/test';
import { AdminURL } from '../../Backend/setup';

test('change password', async ({page}) => {
    await page.goto(AdminURL)
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill('Harsh123');
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(1000);
    await page.locator('.ant-avatar.ant-avatar-circle.css-1okl62o').click()
    await page.waitForTimeout(1000)

    await page.locator('.ant-dropdown-menu-title-content').nth(2).click()
    await page.waitForTimeout(5000)
})
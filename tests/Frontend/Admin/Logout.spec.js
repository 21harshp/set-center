import {test, expect} from '@playwright/test';
import { AdminID, AdminPassword, AdminURL } from '../setup';

test('logout', async ({page}) => {
    await page.goto(AdminURL);
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(2000);
    await page.locator('.ant-avatar.ant-avatar-circle.css-1okl62o').click()
    await page.waitForTimeout(1000)

    await page.locator('.ant-dropdown-menu-title-content').nth(3).click()
    
})

test('Logout And Verify You are on Login Page', async ({page}) => {
    await page.goto(AdminURL);
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(2000);
    await page.locator('.ant-avatar.ant-avatar-circle.css-1okl62o').click()
    await page.waitForTimeout(1000)

    const haan = await page.locator('.ant-dropdown-menu-title-content')
    const logoutBtn = await haan.nth(3)
    await logoutBtn.click()
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/login')
})

test('After logout verify try to go dashbord url', async ({page}) => {
    await page.goto(AdminURL);
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(2000);
    await page.locator('.ant-avatar.ant-avatar-circle.css-1okl62o').click()
    await page.waitForTimeout(1000)

    const haan = await page.locator('.ant-dropdown-menu-title-content')
    const logoutBtn = await haan.nth(3)
    await logoutBtn.click()
    await page.goto(AdminURL);
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/login')
    // await page.waitForTimeout(5000)
})
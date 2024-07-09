import { test, expect } from '@playwright/test'
import { AdminID, AdminURL } from '../setup';


test.beforeEach(async ({ page }) => {
    await page.goto(AdminURL);
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill('Harsh123');
    await page.locator('#normal_login_password').press('Enter');

});

test('Verify Admin name', async ({ page }) => {

    await page.waitForTimeout(1000)
    await page.locator('.ant-avatar.ant-avatar-circle.css-1okl62o').click()
    await page.waitForTimeout(1000)
    const haan = await page.locator('.ant-dropdown-menu-title-content')
    const adminName = await haan.nth(0).innerText()
    await expect(adminName).toBe('Tester')
    
})

test("verify driver's mail ID ", async ({ page }) => {

    await page.waitForTimeout(1000)
    await page.locator('.ant-avatar.ant-avatar-circle.css-1okl62o').click()
    await page.waitForTimeout(1000)
    const haan = await page.locator('.ant-dropdown-menu-title-content')
    const adminMail = await haan.nth(1).innerText()
    await expect(adminMail).toBe(AdminID)
    
})
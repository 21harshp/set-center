import { test, expect } from '@playwright/test';
import { AdminID, AdminPassword, AdminURL, newPassword_admin } from '../setup';


test('Verify With Wrong Old Password', async ({ page }) => {
    await page.goto(AdminURL)
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(4000);
    await page.locator('.ant-avatar-string').click()
    await page.waitForTimeout(1000)

    await page.locator('.ant-dropdown-menu-title-content').nth(2).click()
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/change-password')

    await page.locator('#normal_ChangePassword_oldPassword').fill('AdminPassword');
    await page.locator('#normal_ChangePassword_newPassword').fill(newPassword_admin);
    await page.locator('#normal_ChangePassword_confirmPassword').fill(newPassword_admin);

    await page.locator("button[type='submit']").click()
    const errMsg = await page.locator("//div[@role='status']").textContent();
    // console.log({errMsg});
    expect(errMsg).toBe('資格情報が間違っています');

})

test('Verify With Newpassword And Conformpassword are diffrents', async ({ page }) => {
    await page.goto(AdminURL)
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(4000);
    await page.locator('.ant-avatar-string').click()
    await page.waitForTimeout(1000)

    await page.locator('.ant-dropdown-menu-title-content').nth(2).click()
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/change-password')

    await page.locator('#normal_ChangePassword_oldPassword').fill(AdminPassword);
    await page.locator('#normal_ChangePassword_newPassword').fill(newPassword_admin);
    await page.locator('#normal_ChangePassword_confirmPassword').fill('newPassword_admin');

    await page.locator("button[type='submit']").click()
    const errMsg = await page.locator(".ant-form-item-explain-error").textContent();
    // console.log({errMsg});
    expect(errMsg).toBe('パスワードが一致している必要があります');

})

test('change password sucessfully', async ({ page }) => {
    await page.goto(AdminURL)
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(AdminPassword);
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(4000);
    await page.locator('.ant-avatar-string').click()
    await page.waitForTimeout(1000)

    await page.locator('.ant-dropdown-menu-title-content').nth(2).click()
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/change-password')

    await page.locator('#normal_ChangePassword_oldPassword').fill(AdminPassword);
    await page.locator('#normal_ChangePassword_newPassword').fill(newPassword_admin);
    await page.locator('#normal_ChangePassword_confirmPassword').fill(newPassword_admin);

    await page.locator("button[type='submit']").click()
    const sucessMsg = await page.locator("//div[@role='status']").textContent();
    // console.log({sucessMsg});
    expect(sucessMsg).toBe('パスワードが正常に変更されました');

    await page.waitForTimeout(8000);
})

test('Verify after sucessfull password change Admin is loggedout', async ({ page }) => {
    await page.goto(AdminURL)
    await page.locator('#normal_login_email').fill(AdminID);
    await page.locator('#normal_login_password').fill(newPassword_admin);
    await page.locator('#normal_login_password').press('Enter');

    await page.waitForTimeout(4000);
    await page.locator('.ant-avatar-string').click()
    await page.waitForTimeout(1000)

    await page.locator('.ant-dropdown-menu-title-content').nth(2).click()
    await expect(page).toHaveURL('https://hq.dev.tako-syun.com/change-password')

    await page.locator('#normal_ChangePassword_oldPassword').fill(newPassword_admin);
    await page.locator('#normal_ChangePassword_newPassword').fill(AdminPassword);
    await page.locator('#normal_ChangePassword_confirmPassword').fill(AdminPassword);

    await page.locator("button[type='submit']").click()
    const sucessMsg = await page.locator("//div[@role='status']").textContent();
    // console.log({errMsg});
    expect(sucessMsg).toBe('パスワードが正常に変更されました');
    expect(page).toHaveURL(AdminURL)

})

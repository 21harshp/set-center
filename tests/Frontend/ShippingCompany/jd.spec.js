import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shipping.dev.tako-syun.com');
  await page.getByPlaceholder('ドライバーID').click();
  await page.getByPlaceholder('ドライバーID').fill('321321');
  await page.getByPlaceholder('ドライバーID').press('Tab');
  await page.getByPlaceholder('パスワード').fill('321321');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.locator('div').filter({ hasText: /^多古$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^佐原$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^干潟$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^飯岡$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^引き取り$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^入荷済$/ }).locator('svg').click();
  await page.getByLabel('close', { exact: true }).locator('svg').click();
  await page.locator('.ant-select-selection-overflow').first().click();
  await page.locator('div').filter({ hasText: /^干潟$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^干潟$/ }).nth(3).click();
  await page.locator('.ant-select-selection-overflow').first().click();
  await page.locator('div:nth-child(4) > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click();
  await page.locator('div').filter({ hasText: /^未出荷$/ }).nth(2).click();
  await page.locator('.ant-select-selection-overflow').first().click();
//   await page.locator('div').filter({ hasText: /^佐原$/ }).nth(2).click();
//   await page.locator('div').filter({ hasText: /^干潟$/ }).nth(2).click();
//   await page.getByText('佐原干潟', { exact: true }).click();
  await page.getByPlaceholder('日付を選択').click();
  await page.getByTitle('2024-06-27').click();
  await page.waitForTimeout(5000)
});
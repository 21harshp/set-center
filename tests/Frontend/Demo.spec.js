import { test, expect } from '@playwright/test';
import { name } from '../../playwright.config';

function rgbToHex(rgb) {
    // Separate the RGB components
    const [r, g, b] = rgb.match(/\d+/g);

    // Convert each component to hexadecimal
    const red = parseInt(r).toString(16).padStart(2, '0');
    const green = parseInt(g).toString(16).padStart(2, '0');
    const blue = parseInt(b).toString(16).padStart(2, '0');

    // Return the hexadecimal representation
    return `#${red}${green}${blue}`;
}

test('Example tests', async ({ page }) => {
    await page.goto('https://set-center-poc.vercel.app');
    await expect(page).toHaveTitle('  セットセンター : F11作業入力');

    //Page Title visible 
    const PageTitle = await page.getByText('作業入力');
    await expect(PageTitle).toBeVisible();

    //Verify All Japanise of titles are Display as expected
    const Title = await page.locator('.ant-col.ant-form-item-label.css-11xg00t')
    await expect(Title.nth(0)).toHaveText('得意先');
    await expect(Title.nth(1)).toHaveText('商品');
    await expect(Title.nth(2)).toHaveText('数量');
    await expect(Title.nth(3)).toHaveText('指定日時');
    await expect(Title.nth(4)).toHaveText('生産者');
    await expect(Title.nth(5)).toHaveText('備考');
    await expect(Title.nth(6)).toHaveText('資材');
    await expect(Title.nth(7)).toHaveText('入数');
    await expect(Title.nth(8)).toHaveText('包材');
    await expect(Title.nth(9)).toHaveText('カード');
    await expect(Title.nth(10)).toHaveText('基準数量');

    await page.locator('input[data-testid="得意先"]').fill('1  2  3  4  5  6  7  8');

    await page.locator('input[name="商品"]').fill('1  2  3  4  5  6  7  8  9  0  1  2  3  4');
    await page.waitForTimeout(1000);
    await page.locator('input[data-testid="数量"]').fill('123456')
    await page.waitForTimeout(1000);

    // await page.locator('input[data-testid="指定日時"]').fill('123456')
    // await page.waitForTimeout(1000);


    await page.locator('input[data-testid="生産者"]').fill('1  2  3  4  5  6  7  8')
    await page.locator('input[name="資材"]').fill('1  2  3  4  5  6  7  8  9');
    await page.locator('input[data-testid="入数"]').fill('1234')
    await page.locator('input[name="包材"]').fill('1  2  3  4  5  6  7  8  9');
    await page.locator('input[data-testid="カード"]').fill('1  2  3  4  5')
    await page.locator('textarea[name="備考"]').fill('1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0');
    await page.waitForTimeout(1000);
    await page.locator('input[name="キログラム"]').fill('キログラム');
    await page.waitForTimeout(1000);


    const elementOfNumberOfCompletions = await page.$('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/input[1]');


    const beforeHoverStyle = await elementOfNumberOfCompletions.evaluate((el) => {
        const computedStyle = window.getComputedStyle(el);
        return computedStyle.borderColor;
    });

    await elementOfNumberOfCompletions.hover();
    await page.waitForTimeout(1000);

    const afterHoverStyle = await elementOfNumberOfCompletions.evaluate((el) => {
        const computedStyle = window.getComputedStyle(el);
        return computedStyle.borderColor;
    });

    const beforeHexColor = rgbToHex(beforeHoverStyle);
    const afterHexColor = rgbToHex(afterHoverStyle);
    const beforeColor = await expect(beforeHexColor).toBe('#d9d9d9');
    
    if (beforeHexColor === '#d9d9d9' && afterHexColor === '#4096ff') {
        console.log('Hover Effect of "完成数" is matched Sucessfully!');
    } else {
        console.log('Before (完成数) element Of Number Of Completions', beforeHexColor);
        console.log('after (完成数) element Of Number Of Completions', afterHexColor);
    }

    await page.waitForTimeout(5000); 
})
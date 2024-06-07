import {test, expect} from '@playwright/test';

test.skip('Drag And Drop', async ({page}) => {
    await page.goto('https://set-center-poc.vercel.app/');
    
    await page.getByText('作業入力').click();
    const From = await page.locator("//div[@class='truncate w-full max-w-full overflow-hiddenpy-1 px-1 text-sm h-auto bg-green-500 shadow-sm']");
    const To1 = await page.locator('#list-list1');

    if (From && To1 ) {
        // await From.dragTo(To1);
        await From.hover()
        await page.mouse.down()

        await To1.hover()
        await page.mouse.up()
        console.log('+65+656+5+65');
    } else {
        console.error('dfiubdiuwfhuih')
    }
    

    await page.waitForTimeout(5000);
})

test('dummy site', async ({page}) => {
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const Dragable = await page.locator('#box1');
    const target = await page.locator('#box101');

    await Dragable.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(5000); 

})
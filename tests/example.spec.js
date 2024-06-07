// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});




  //  await page.goto('https://set-center-poc.vercel.app/f9');

  //   // Define the source and destination elements for drag and drop
  //   const sourceElement = await page.$("//div[@class='truncate w-full max-w-full overflow-hiddenpy-1 px-1 text-sm h-auto bg-green-500 shadow-sm']");
  //   const destinationElement = await page.$('#list-list1');
  
  //   // Get the bounding boxes of both elements
  //   const sourceBoundingBox = await sourceElement.boundingBox();
  //   const destinationBoundingBox = await destinationElement.boundingBox();
  
  //   // Calculate the center coordinates of both elements
  //   const sourceCenterX = sourceBoundingBox.x + sourceBoundingBox.width / 2;
  //   const sourceCenterY = sourceBoundingBox.y + sourceBoundingBox.height / 2;
  //   const destinationCenterX = destinationBoundingBox.x + destinationBoundingBox.width / 2;
  //   const destinationCenterY = destinationBoundingBox.y + destinationBoundingBox.height / 2;
  
  //   // Perform the drag and drop action
  //   await page.mouse.move(sourceCenterX, sourceCenterY);
  //   await page.mouse.down();
  //   await page.mouse.move(destinationCenterX, destinationCenterY);
  //   await page.mouse.up();
  
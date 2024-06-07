const { chromium } = require('playwright');

// Array of phone numbers
const phoneNumbers = [
  '7600004548', // Replace these with your actual numbers
  '9825384548',
  // Add more numbers as needed
];

const message = "Hello, this is a test message";

test('should first', async ({ page }) => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const newPage = await context.newPage();
  
    // Open WhatsApp Web and wait for the user to log in
    await newPage.goto('https://web.whatsapp.com');
    console.log('Please scan the QR code to log in to WhatsApp Web.');
    await newPage.waitForSelector('canvas[aria-label="Scan me!"]', { state: 'detached' });
  
    for (const phoneNumber of phoneNumbers) {
      try {
        const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        await newPage.goto(url);
  
        // Wait for the message input box to be available
        await newPage.waitForSelector('div[contenteditable="true"]');
        await newPage.click('div[contenteditable="true"]');
  
        // Simulate typing the message
        await newPage.keyboard.press('Enter'); // This presses the Enter key to send the message
        await newPage.waitForTimeout(4000);
  
        console.log(`Message sent to ${phoneNumber}`);
  
        // Wait a few seconds before sending the next message to avoid being flagged as spam
        await newPage.waitForTimeout(5000);
      } catch (err) {
        console.error(`Failed to send message to ${phoneNumber}:`, err);
      }
    }
  
    await browser.close();
})();


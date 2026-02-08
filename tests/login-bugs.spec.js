const { test, expect } = require('@playwright/test');

/**
 * BUG-001: Verification of Login Button State
 * Purpose: Ensure the login button remains functional and not permanently disabled 
 * after multiple failed attempts.
 */
test('BUG-001: Login button should not be permanently disabled after 3 attempts', async ({ page }) => {
  // Navigate to the local development server
  await page.goto('http://127.0.0.1:5500/src/frontend/login-module.html');

  const loginBtn = page.locator('#loginBtn');

  // Simulate 3 consecutive click attempts
  for (let i = 0; i < 3; i++) {
    await loginBtn.click();
  }

  // ASSERTION: The button should remain clickable (enabled).
  // Note: This test is expected to FAIL due to the existing bug where the button becomes disabled.
  await expect(loginBtn).toBeEnabled();
});

/**
 * BUG-002: Form Validation and API Connectivity
 * Purpose: Verify that empty fields trigger validation instead of generic failures
 * and ensure that valid data successfully initiates a POST request.
 */
test('BUG-002: Should show validation error for empty fields and reach API', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/frontend/login-module.html');

  // Scenario 1: Verify client-side validation for empty fields
  await page.click('#loginBtn');
  
  const errorMessage = page.locator('#errorMessage');
  // ASSERTION: Should NOT show "Connection Failure" for empty inputs; should show validation warning instead.
  await expect(errorMessage).not.toContainText('Connection Failure');

  // Scenario 2: Verify if the API request is correctly dispatched
  // Set up a listener for the specific API endpoint
  const requestPromise = page.waitForRequest('**/posts');
  
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');
  
  // Await the captured request and verify the HTTP method
  const request = await requestPromise;
  expect(request.method()).toBe('POST');
});

/**
 * BUG-003: Sensitive Data Leakage Prevention
 * Purpose: Ensure that user credentials (passwords) are not exposed 
 * in the browser's console logs during the authentication process.
 */
test('BUG-003: Passwords should NOT be logged to the console', async ({ page }) => {
  const secretPassword = 'MySecretPassword123';
  let passwordLeaked = false;

  // Set up an event listener to capture all console activity
  page.on('console', msg => {
    if (msg.text().includes(secretPassword)) {
      passwordLeaked = true;
    }
  });

  await page.goto('http://127.0.0.1:5500/src/frontend/login-module.html');
  await page.fill('#username', 'testuser');
  await page.fill('#password', secretPassword);
  await page.click('#loginBtn');

  // ASSERTION: The sensitive password string should not be found in any captured console message.
  expect(passwordLeaked).toBe(false);
});
import test from '@playwright/test';

test('Locator Strategies', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.getByTestId('login-button').click();
});
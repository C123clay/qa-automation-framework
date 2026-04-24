import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/testData';

test.describe('Login', () => {
  test('successful login with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await page.waitForURL(/inventory/);
  });

  test('locked out user sees an error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);
    await loginPage.assertLoginError('Sorry, this user has been locked out.');
  });
});
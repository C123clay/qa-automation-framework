import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  usernameInput = () => this.page.locator('[data-test="username"]');
  passwordInput = () => this.page.locator('[data-test="password"]');
  loginButton = () => this.page.locator('[data-test="login-button"]');
  errorMessage = () => this.page.locator('[data-test="error"]');

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  async assertLoginError(expectedText: string) {
    await expect(this.errorMessage()).toContainText(expectedText);
  }
}
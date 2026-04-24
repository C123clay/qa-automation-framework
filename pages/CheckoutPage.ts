import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  checkoutButton = () => this.page.locator('[data-test="checkout"]');
  firstNameInput = () => this.page.locator('[data-test="firstName"]');
  lastNameInput = () => this.page.locator('[data-test="lastName"]');
  postalCodeInput = () => this.page.locator('[data-test="postalCode"]');
  continueButton = () => this.page.locator('[data-test="continue"]');
  finishButton = () => this.page.locator('[data-test="finish"]');
  completeHeader = () => this.page.locator('[data-test="complete-header"]');

  async startCheckout() {
    await this.checkoutButton().click();
  }

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput().fill(firstName);
    await this.lastNameInput().fill(lastName);
    await this.postalCodeInput().fill(postalCode);
    await this.continueButton().click();
  }

  async finishCheckout() {
    await this.finishButton().click();
  }

  async assertOrderComplete() {
    await expect(this.completeHeader()).toHaveText('Thank you for your order!');
  }
}
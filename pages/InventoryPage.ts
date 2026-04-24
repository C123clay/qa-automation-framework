import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  title = () => this.page.locator('[data-test="title"]');
  backpackAddToCartButton = () =>
    this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  shoppingCartLink = () => this.page.locator('[data-test="shopping-cart-link"]');
  shoppingCartBadge = () => this.page.locator('[data-test="shopping-cart-badge"]');

  async assertLoaded() {
    await expect(this.title()).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton().click();
  }

  async assertCartCount(count: string) {
    await expect(this.shoppingCartBadge()).toHaveText(count);
  }

  async openCart() {
    await this.shoppingCartLink().click();
  }
}
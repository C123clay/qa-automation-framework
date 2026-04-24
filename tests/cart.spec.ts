import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users, checkoutData } from '../fixtures/testData';

test.describe('Cart and Checkout', () => {
  test('user can add item to cart and complete checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.assertLoaded();

    await inventoryPage.addBackpackToCart();
    await inventoryPage.assertCartCount('1');
    await inventoryPage.openCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillCheckoutInfo(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.postalCode
    );

    await checkoutPage.finishCheckout();
    await checkoutPage.assertOrderComplete();
  });
});
import { expect } from '@playwright/test';
export class CheckoutPage {
    pageloading;
    imageloading;
    checkoutbutton;
    page;
    constructor(page) {
        this.page = page;
        this.pageloading = page.locator("div li");
        this.imageloading = page.locator("h3:has-text('ZARA COAT 3')");
        this.checkoutbutton = page.locator("text=Checkout");
    }
    async ClickOnCheckoutButton() {
        await this.pageloading.first().waitFor();
        const bool = await this.imageloading.isVisible();
        expect(bool).toBeTruthy();
        await this.checkoutbutton.click();
    }
}
module.exports = { CheckoutPage };

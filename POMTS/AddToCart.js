export class SelectProduct {
    products;
    productname;
    cartbutton;
    page;
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productname = page.locator(".card-body b");
        this.cartbutton = page.locator("[routerlink*='cart']");
    }
    async SearchProduct(productName) {
        await this.productname.first().waitFor();
        const titles = await this.productname.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }
    async ClickOnCartButton() {
        await this.cartbutton.click();
    }
}
module.exports = { SelectProduct };

import {test,expect,Locator,Page} from '@playwright/test'
export class PlaceOrder {


        page: Page
        dropdown: Locator
        country: Locator
        submitorder: Locator

    constructor(page:Page)
    {
        this.page = page;
        this.dropdown = page.locator("[placeholder*='Country']")
        this.country = page.locator(".ta-results")
        this.submitorder = page.locator(".action__submit")

    }

    async EnterDetails()
    {
        await this.dropdown.pressSequentially("ind", { delay: 150 });
        const dropdown = this.country;
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }


    }

    async ClickOnPlaceOrderButton(username:string)
    {
        
        expect(this.page.locator(".user__name [type='text']").first()).toHaveText(username);
        await this.submitorder.click();
        await expect(this.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        
    }
}

module.exports = {PlaceOrder};


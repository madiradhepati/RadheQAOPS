const {test,expect} = require('@playwright/test');
//const { count } = require('node:console');
//trace.playwright.dev
//npx playwright test ./tests/Test1.spec.js --reporter=line,allure-playwright
//allure generate ./allure-results --clean
//allure open ./allure-report
//npm run BasicTests
//export PLAYWRIGHT_SERVICE_URL=wss://westeurope.api.playwright.microsoft.com/playwrightworkspaces/1fc712f3-fdd9-4198-b867-f5033efde30e/browsers
//TEST 





//test.describe.configure({mode:'parallel'})
//test.describe.configure({mode:'serial'})
test('@P1 E2E Automation', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
   await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ", { delay: 500 });
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});


test('Login Test 1', async({browser})=>
{
        const Context = await browser.newContext()
        const Page = await Context.newPage()
        await Page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        //console.log(await Page.title())
        //await expect(Page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
        //await Page.pause()
        //await Page.locator('#username').fill('rahulshettyacadem')
        // await Page.locator('[type=text]').fill('Radhe')
        // await Page.locator('[name=username]').fill('Radhe')
        // await Page.locator('[id=username]').fill('rahulshettyacadem')
        // await Page.locator('[id=password]').fill('Learning@830$3mK2')
        // //await Page.locator('[type=submit]').click() 
        // console.log(await Page.locator("[style*='block']").textContent())
        // await expect(Page.locator("[style*='block']")).toContainText('Incorrect username/')
        // //await Page.pause()
        // await Page.locator('[id=username]').fill('')
        //await Page.pause()
        await Page.locator('[id=username]').fill('rahulshettyacademy')
        await Page.locator('[id=password]').fill('Learning@830$3mK2')
        await Page.locator('[type=submit]').click() 
        //console.log(await Page.locator(".card-body a").nth(1).textContent())
        //console.log(await Page.locator(".card-body a").allTextContents())
        //await Page.locator('select.form-control').selectOption('teach')
        //await Page.locator('.radiotextsty').nth(1).click()
        //await expect(Page.locator('.radiotextsty').nth(1)).toBeChecked()
        //console.log(await Page.locator('.radiotextsty').nth(1).isChecked())
        //console.log(await (Page.locator('.modal-body').textContent()))
        //await expect(Page.locator('.modal-body')).toContainText('fewer functionalities of the app. Proceed?')
        //await Page.locator('#okayBtn').click()
        //await Page.pause()
        //await Page.locator('#terms').click()
        //await expect(Page.locator('#terms')).toBeChecked()
        //await Page.locator('#terms').uncheck()
        //expect(await Page.locator('#terms').isChecked()).toBeFalsy()

});     


test('E2E Test using CSS Locators', async({browser})=>
{
        const Context = await browser.newContext()
        const Page = await Context.newPage()
        await Page.goto('https://rahulshettyacademy.com/client/#/auth/login')
        await Page.locator('[id=userEmail]').fill('radhe11@hotmail.co.uk')
        await Page.locator('[id=userPassword]').fill('Krishna@135')
        await Page.locator('[type=submit]').click() 
        console.log(await Page.locator('.card-body b').nth(1).textContent())
        //await Page.waitForLoadState('networkidle')
        //await Page.locator(".card-body b").first().waitFor() 
        const Products = Page.locator(".card-body")
        const ProductName = 'ZARA COAT 3'
        await Page.locator(".card-body b").last().waitFor() 
        const Titles = await Page.locator(".card-body b").allTextContents()
        const Count = await Products.count()
        //console.log(Count)
        for(let i = 0; i < Count; ++i)
        {
          if (await Products.nth(i).locator('b').textContent() === ProductName)
        {
                await Products.nth(i).locator('text=Add To Cart').click()
                break
       }}
       await Page.locator('[routerlink*=cart]').click()
       await Page.locator("div li").first().waitFor()
       const ProductAdded = await Page.locator("h3:has-text('ZARA COAT 3')").isVisible()
       console.log(ProductAdded)
       expect(ProductAdded).toBeTruthy()
       //await Page.locator("button[type='button']").last().click()
       await Page.locator('text=Checkout').click()
       //await Page.pause()
       //await Page.locator("input[placeholder*='Country']").pressSequentially('ind')
       await Page.locator('[placeholder*=Country]').pressSequentially('ind',{delay: 150})
       const Results = await Page.locator('.ta-results')
       await Results.waitFor()
       const NewCount = await Results.locator('button').count()
       console.log(NewCount)
        for(let i = 0; i < NewCount; ++i)
        {
               const text = await Results.locator('button').nth(i).textContent()
                if(text.trim() === "India")
        {
                await Results.locator('button').nth(i).click()
                break
       }}
       //await Page.pause() 
       await Page.locator(".form__cc [type='text']").nth(1).fill('123')
       await Page.locator(".form__cc [type='text']").nth(2).fill('Radhe')
       await Page.locator(".form__cc [type='text']").nth(3).fill('Test')
       const Email = "radhe11@hotmail.co.uk"
       expect(await Page.locator(".user__name [type='text']").first()).toHaveText(Email)
       await Page.locator('.btnn').click()
       await expect(Page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ")
       const OrderNumber = await Page.locator('.em-spacer-1 .ng-star-inserted').textContent()
       console.log(OrderNumber)
       //await Page.pause()
       await Page.locator('button[routerlink*=myorders]').click()
       await Page.locator('tbody').waitFor()
       const rows = await Page.locator('tbody tr')
       for (let i=0; i < await rows.count(); i++)
       {
                const rowOrderId = await rows.nth(i).locator('th').textContent()
                if (OrderNumber.includes(rowOrderId))
                {
                await rows.nth(i).locator("button").first().click()
                break
                }
       }
       const OrderIdDetails = await Page.locator('.col-text').textContent()
       expect(OrderNumber.includes(OrderIdDetails)).toBeTruthy()

});


test('Login Test 3', async({browser})=>
{
        const Context = await browser.newContext()
        const Page = await Context.newPage()
        await Page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        const Link = Page.locator('[href*=request]')
        await expect (Link).toHaveAttribute('class','blinkingText')
        const [Page1] = await Promise.all([Context.waitForEvent('page'),Link.click()])
        //console.log(await Page1.locator('.red').textContent())
        const text = await Page1.locator('.red').textContent()
        //console.log(text)
        const newtext = text.split("@")
        const Domain = newtext[1].split(" ")[0]
        //console.log(Domain)
        await Page.locator('#username').fill(Domain)
        await Page.pause()
        console.log(await Page.locator('#username').inputValue())

});


test('Login Test 4', async({browser})=>
{
        const Context = await browser.newContext()
        const Page = await Context.newPage()
        await Page.goto('https://rahulshettyacademy.com/client/#/auth/login')
        await Page.locator('#userEmail').fill('radhe11@hotmail.co.uk')
        await Page.locator('#userPassword').fill('Krishna@135')
        await Page.locator('#login').click()
        console.log(await Page.locator('.blinkingText').textContent())
        await expect(Page.locator('.blinkingText')).toContainText('QA Skill')
        const TargetProduct = 'ZARA COAT 3'
        await Page.locator('.card-body').first().waitFor()
        const Products = await Page.locator('.card-body')
        const Count = await Products.count()
        console.log(Count)
        await Page.locator(".card-body b").allTextContents()
        console.log(await Page.locator(".card-body b").allTextContents())
        for(let i=0; i<Count; i++)
        {
          if (await Products.nth(i).locator('b').textContent() === TargetProduct)
        {
                await Products.nth(i).locator('text=Add To Cart').click()
                break
       }}
        await Page.locator('.btn-custom').nth(2).click()
        console.log(await Page.locator('.heading h1').textContent())
        await expect(Page.locator('.heading h1')).toContainText('My Cart')
        await Page.locator('.btn-primary').nth(2).click()
        console.log(await Page.locator('.payment__title').nth(0).textContent())
        //await expect(Page.locator('.payment__title')).nth(0).toContainText('Payment Method')
        await Page.locator('[placeholder*=Country]').pressSequentially('ind',{delay: 150})
        const Results = await Page.locator('.ta-results')
        await Results.waitFor()
        const NewCount = await Results.locator('button').count()
        console.log(NewCount)
        for(let i = 0; i < NewCount; ++i)
        {
               const text = await Results.locator('button').nth(i).textContent()
                if(text.trim() === "India")
        {
                await Results.locator('button').nth(i).click()
                break
       }}
       await Page.locator(".form__cc [type='text']").nth(1).fill('123')
       await Page.locator(".form__cc [type='text']").nth(2).fill('Radhe')
       await Page.locator(".form__cc [type='text']").nth(3).fill('Test')
       const Email = "radhe11@hotmail.co.uk"
       expect(await Page.locator(".user__name [type='text']").first()).toHaveText(Email)
       await Page.locator('.btnn').click()
       await expect(Page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ")
       const OrderNumber = await Page.locator('.em-spacer-1 .ng-star-inserted').textContent()
       console.log(OrderNumber)
       //await Page.pause()
       await Page.locator("button[routerlink*=myorders]").click()
       await Page.locator('tbody').waitFor()
       const rows = await Page.locator('tbody tr')
       for (let i=0; i < await rows.count(); i++)
       {
                const rowOrderId = await rows.nth(i).locator('th').textContent()
                if (OrderNumber.includes(rowOrderId))
                {
                await rows.nth(i).locator("button").first().click()
                break
                }
       }
       const OrderIdDetails = await Page.locator('.col-text').textContent()
       expect(OrderNumber.includes(OrderIdDetails)).toBeTruthy()
        });


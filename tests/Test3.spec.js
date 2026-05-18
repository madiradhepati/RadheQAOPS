const {test,expect,request} = require('@playwright/test')
const loginpayload = {userEmail:"radhe11@hotmail.co.uk",userPassword:"Krishna@135"}
let token


test.beforeAll( async ()=> {

    const apicontext = await request.newContext()
    const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginpayload})
    expect(loginresponse.ok()).toBeTruthy()
    const loginresponseJson = await loginresponse.json()
    token = loginresponseJson.token
    console.log(token)

})  

test('Login using API', async ({page}) => {

    page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    },token)

    await page.goto("https://rahulshettyacademy.com/client")
    await page.waitForLoadState('networkidle')
    const title = await page.title()
    console.log(title)
    console.log(await page.locator('.card-body b').nth(1).textContent())
        //await Page.waitForLoadState('networkidle')
        //await Page.locator(".card-body b").first().waitFor() 
        const Products = page.locator(".card-body")
        const ProductName = 'ZARA COAT 3'
        await page.locator(".card-body b").last().waitFor() 
        const Titles = await page.locator(".card-body b").allTextContents()
        const Count = await Products.count()
        //console.log(Count)
        for(let i = 0; i < Count; ++i)
        {
          if (await Products.nth(i).locator('b').textContent() === ProductName)
        {
                await Products.nth(i).locator('text=Add To Cart').click()
                break
       }}
       await page.locator('[routerlink*=cart]').click()
       await page.locator("div li").first().waitFor()
       const ProductAdded = await page.locator("h3:has-text('ZARA COAT 3')").isVisible()
       console.log(ProductAdded)
       expect(ProductAdded).toBeTruthy()
       //await page.locator("button[type='button']").last().click()
       await page.locator('text=Checkout').click()
       //await Page.pause()
       //await Page.locator("input[placeholder*='Country']").pressSequentially('ind')
       await page.locator('[placeholder*=Country]').pressSequentially('ind',{delay: 150})
       const Results = await page.locator('.ta-results')
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
       await page.locator(".form__cc [type='text']").nth(1).fill('123')
       await page.locator(".form__cc [type='text']").nth(2).fill('Radhe')
       await page.locator(".form__cc [type='text']").nth(3).fill('Test')
       const Email = "radhe11@hotmail.co.uk"
       expect(await page.locator(".user__name [type='text']").first()).toHaveText(Email)
       await page.locator('.btnn').click()
       await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ")
       const OrderNumber = await page.locator('.em-spacer-1 .ng-star-inserted').textContent()
       console.log(OrderNumber)
       //await Page.pause()
       await page.locator('button[routerlink*=myorders]').click()
       await page.locator('tbody').waitFor()
       const rows = await page.locator('tbody tr')
       for (let i=0; i < await rows.count(); i++)
       {
                const rowOrderId = await rows.nth(i).locator('th').textContent()
                if (OrderNumber.includes(rowOrderId))
                {
                await rows.nth(i).locator("button").first().click()
                break
                }
       }
       const OrderIdDetails = await page.locator('.col-text').textContent()
       expect(OrderNumber.includes(OrderIdDetails)).toBeTruthy()


}) 

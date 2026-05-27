const {test,expect} = require('@playwright/test') 
let Browserdata

test.beforeAll(async({browser})=> 
{
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.route('**/*.css', route => route.abort())
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
        await page.locator('[id=userEmail]').fill('radhe11@hotmail.co.uk')
        await page.locator('[id=userPassword]').fill('Krishna@135')
        await page.locator('[type=submit]').click()
        await page.waitForLoadState('networkidle')
        await context.storageState({path:'state.json'})
        Browserdata = await browser.newContext({storageState:'state.json'})

})   

test('Abort action plus Request and Response details',async({})=>
{
    const page = await Browserdata.newPage()
    await page.route('**/*.{jpg,jpeg,png,gif}', route => route.abort())
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard')
    await page.waitForLoadState('networkidle')
    await page.locator(".card-body b").first().waitFor()
    await page.on('request', request => console.log(request.url()))
    await page.on('response', response => console.log(response.url(),response.status()))  
    await page.locator('.card-body').filter({hasText:'ZARA COAT 3'}).getByRole('button',{name:' Add To Cart'}).click()
    await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click()
    await page.locator("div li").first().waitFor() 
    await expect(page.getByText('ZARA COAT 3')).toBeVisible()
    await page.getByRole('button',{name:'Checkout'}).click()
    await page.getByPlaceholder('Select Country').pressSequentially('ind')
    await page.getByRole('button',{name:'India'}).nth(1).click()
    await page.screenshot({path:'screenshot.png'})
    await page.getByText('PLACE ORDER').screenshot({path:'placeorder.png'})
    await page.getByText('PLACE ORDER').click()
    await expect(page.getByText('Thankyou for the order.')).toBeVisible()

}) 
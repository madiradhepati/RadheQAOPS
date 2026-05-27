const {test,expect} = require('@playwright/test') 
let Browserdata

test.beforeAll(async({browser})=> 
{
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
        await page.locator('[id=userEmail]').fill('radhe11@hotmail.co.uk')
        await page.locator('[id=userPassword]').fill('Krishna@135')
        await page.locator('[type=submit]').click()
        await page.waitForLoadState('networkidle')
        await context.storageState({path:'state.json'})
        Browserdata = await browser.newContext({storageState:'state.json'})

})   

test('Test1',async({})=>
{
    const page = await Browserdata.newPage()
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard')
    await page.waitForLoadState('networkidle')
    await page.locator(".card-body b").first().waitFor()
    await page.locator('.card-body').filter({hasText:'ZARA COAT 3'}).getByRole('button',{name:' Add To Cart'}).click()
    await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click()
    await page.locator("div li").first().waitFor() 
    await expect(page.getByText('ZARA COAT 3')).toBeVisible()
    await page.getByRole('button',{name:'Checkout'}).click()
    await page.getByPlaceholder('Select Country').pressSequentially('ind')
    await page.getByRole('button',{name:'India'}).nth(1).click()
    await page.getByText('PLACE ORDER').click()
    await expect(page.getByText('Thankyou for the order.')).toBeVisible()

}) 


test('Test2',async({})=>
{
    const page = await Browserdata.newPage()
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard')
    //await page.waitForLoadState('networkidle')
    await page.locator(".card-body b").first().waitFor()
    await page.locator('.card-body').filter({hasText:'ZARA COAT 3'}).getByRole('button',{name:' Add To Cart'}).click()
    await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click()
    await page.locator("div li").first().waitFor() 
    await expect(page.getByText('ZARA COAT 3')).toBeVisible()
    await page.getByRole('button',{name:'Checkout'}).click()
    await page.getByPlaceholder('Select Country').pressSequentially('ind')
    await page.getByRole('button',{name:'India'}).nth(1).click()
    await page.getByText('PLACE ORDER').click()
    await page.pause()
}) 





const {test,expect,request} = require('@playwright/test')
const loginpayload = {userEmail:"radhe11@hotmail.co.uk",userPassword:"Krishna@135"}
const orderpayload = {orders:[{country:"India",productOrderedId:"6960eac0c941646b7a8b3e68"}]}   
let token
let OrderNumber

test.beforeAll( async ()=> {

    const apicontext = await request.newContext()
    const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginpayload})
    expect(loginresponse.ok()).toBeTruthy()
    const loginresponseJson = await loginresponse.json()
    token = loginresponseJson.token
    console.log(token)
    const orderresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {data:orderpayload, headers:{'Authorization':token,'content-type':'application/json'}
    })  
    const orderresponseJson = await orderresponse.json()
    console.log(orderresponseJson)
    OrderNumber = orderresponseJson.orders[0] 
})   

test('Place an order using API', async ({page}) => {

    page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    },token)

    await page.goto("https://rahulshettyacademy.com/client")
    await page.waitForLoadState('networkidle')
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
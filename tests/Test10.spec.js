const {test,expect} = require('@playwright/test') 

test('Visual testing', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    expect(await page.screenshot()).toMatchSnapshot('one.png')

}) 
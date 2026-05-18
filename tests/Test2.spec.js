//import {test,expect} from '@playwright/test';
const {test,expect} = require('@playwright/test')

test('@P1 Types of labels', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice")
    await page.pause()
    await page.getByPlaceholder('Password').fill('123abc')
    await page.getByLabel('Check me out if you Love IceCreams!').click()
    await page.getByLabel('Gender').selectOption('Male')
    await page.getByLabel('Employed').check()
    await page.getByRole('button',{name:'Submit'}).click()
    await page.getByText('Success!').isVisible()
    await page.getByRole('link',{name:'Shop'}).click()
    await page.pause()
    await page.locator('app-card').filter({hasText:'Nokia Edge'}).getByRole('button').click()

}); 

test('E2E Using Methods', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.getByPlaceholder('email@example.com').fill('radhe11@hotmail.co.uk')
    await page.getByPlaceholder('enter your passsword').fill('Krishna@135')
    await page.getByRole('button',{name:'Login'}).click()
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

}); 

test('Date Selection', async ({page}) => {

    
    const Month = '08'
    const Date = '12'
    const Year = '2027'
    const Expected = [Month,Date,Year]
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    await page.locator('.react-date-picker__inputGroup').click()
    await page.locator('.react-calendar__navigation__label__labelText').click()
    await page.locator('.react-calendar__navigation__label__labelText').click()
    await page.getByText(Year).click()
    await page.locator('.react-calendar__year-view__months__month').nth(Number(Month)-1).click()
    await page.locator("//abbr[text()='"+Date+"']").click();
    // const Values = page.locator('.react-date-picker__inputGroup__input')

    // for(let i=0; i<Expected.length; i++)
    // {
    //     const DateValidation = await Values.nth(i).inputValue()
    //     expect(DateValidation).toEqual(Expected[i])

    // }
    
}); 


test('Hidden elements and Pop ups', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice')
    //await page.goto ('https://google.com')
    //await page.goBack()
    //await page.goForward()
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()
    page.on('dialog',dialog => dialog.accept())
    //page.on('dialog',dialog => dialog.dismiss())
    await page.locator('#confirmbtn').click()
    await page.locator('#mousehover').hover()
    const Newframe = page.frameLocator('#courses-iframe')
    await Newframe.locator("li a[href*='lifetime-access']:visible").click()
    const Text = await Newframe.locator('.header-text h2').textContent()
    //console.log(Text)
    const Number = await Newframe.locator("[data-stop='257000']").textContent()
    console.log(Number)
    console.log(Text.split(" ")[3])

})

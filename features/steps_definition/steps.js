const { Given, When, Then } = require('@cucumber/cucumber')
const {ClassManager} = require('../../POM/ObjectsManager')
const {test,expect} = require('@playwright/test')

//npx cucumber-js --exit
//npx cucumber-js features/Ecommerce1.feature --exit
//npx cucumber-js --tags "@negative" --exit
//npx cucumber-js features/Ecommerce.feature --parallel 2 --exit 
//npx cucumber-js features/Ecommerce.feature --parallel 2 --exit --format html:cucumber-report.html
//npx cucumber-js features/Ecommerce.feature --retry 2  --exit --format html:cucumber-report.html


Given('A login to Ecommerce application with {string} and {string} is successful', 
    {timeout: 100*1000}, async function (username,password) 
{
    
   const products = this.page.locator(".card-body");
   const loginPage = this.classManager.getLoginPage() 
   await loginPage.LoginURL()
   await loginPage.LoginAction(username,password)

});

When('Add {string} to cart', async function (productName) 
{
   const selectProduct = this.classManager.getSelectProduct()
   await selectProduct.SearchProduct(productName)
   await selectProduct.ClickOnCartButton()
});

Then('Verify {string} is displayed in the cart', async function (productName) 
{
   const checkoutPage = this.classManager.getCheckoutPage()
   await checkoutPage.ClickOnCheckoutButton()
        
});

  When('Enter valid details and place the order', async function () 
{
   const username = 'radhe11@hotmail.co.uk'
   const placeOrder = this.classManager.getPlaceOrder()
   await placeOrder.EnterDetails()
   await placeOrder.ClickOnPlaceOrderButton(username)
});

 Then('Verify order is present in the order history', async function () 
{
  const reviewOrderDetails = this.classManager.getReviewOrderDetails()
   await reviewOrderDetails.ClickOrdersButton()
});


// Given('A login to Ecommerce2 application with {string} and {string}', async function (username, password) 
//          {
//                await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
//                await this.page.locator('[id=username]').fill(username)
//                await this.page.locator('[id=password]').fill(password)
//                await this.page.locator('[type=submit]').click() 
//          });
       
//          Then('Verify the error message', async function () 
//          {
//            expect(this.page.locator("[style*='block']")).toContainText('Incorrect username/')
//          });


const {test,expect} = require('@playwright/test');
const {customtest} = require('../Utils/NewTestData'); 
const {ClassManager} = require('../POM/ObjectsManager')
//convert JSON to String and then to Javascript object
//const TestData = JSON.parse(JSON.stringify(require('../Utils/CreateOrderTestData.json')))
//npx playwright test ./tests/E2E4.spec.js --config playwright.config1.js --project=chrome 


customtest('E2E Test', async ({page,Testdata}) => {
   
   const classManager = new ClassManager(page)
   const products = page.locator(".card-body");

   const loginPage = classManager.getLoginPage() 
   await loginPage.LoginURL()
   await loginPage.LoginAction(Testdata.username,Testdata.password)

   const selectProduct = classManager.getSelectProduct()
   await selectProduct.SearchProduct(Testdata.productName)
   await selectProduct.ClickOnCartButton()

   const checkoutPage = classManager.getCheckoutPage()
   await checkoutPage.ClickOnCheckoutButton()

   const placeOrder = classManager.getPlaceOrder()
   await placeOrder.EnterDetails()
   await placeOrder.ClickOnPlaceOrderButton(Testdata.username)

   const reviewOrderDetails = classManager.getReviewOrderDetails()
   await reviewOrderDetails.ClickOrdersButton()
 
});


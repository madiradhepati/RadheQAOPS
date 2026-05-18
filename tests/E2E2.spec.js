const {test,expect} = require('@playwright/test');
const {ClassManager} = require('../POM/ObjectsManager')
//convert JSON to String and then to Javascript object
const TestData = JSON.parse(JSON.stringify(require('../Utils/CreateOrderTestData.json')))


for(const data of TestData)
{
test(`E2E Test ${data.username}`, async ({page}) => {
   
   const classManager = new ClassManager(page)
   const products = page.locator(".card-body");

   const loginPage = classManager.getLoginPage() 
   await loginPage.LoginURL()
   await loginPage.LoginAction(data.username,data.password)

   const selectProduct = classManager.getSelectProduct()
   await selectProduct.SearchProduct(data.productName)
   await selectProduct.ClickOnCartButton()

   const checkoutPage = classManager.getCheckoutPage()
   await checkoutPage.ClickOnCheckoutButton()

   const placeOrder = classManager.getPlaceOrder()
   await placeOrder.EnterDetails()
   await placeOrder.ClickOnPlaceOrderButton(data.username)

   const reviewOrderDetails = classManager.getReviewOrderDetails()
   await reviewOrderDetails.ClickOrdersButton()
 
});
} 
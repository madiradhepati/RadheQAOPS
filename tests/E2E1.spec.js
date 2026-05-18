const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../POM/Login');
const {SelectProduct} = require('../POM/AddToCart');
const {CheckoutPage} = require('../POM/Checkout');
const {PlaceOrder} = require('../POM/SubmitOrder');
const {ReviewOrderDetails} = require('../POM/OrderDetails');


test('E2E Automation', async ({page}) => {
   
   const username = "radhe11@hotmail.co.uk";
   const password = "Krishna@135";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");

   const loginPage = new LoginPage(page) 
   await loginPage.LoginURL()
   await loginPage.LoginAction(username,password)

   const selectProduct = new SelectProduct(page)
   await selectProduct.SearchProduct(productName)
   await selectProduct.ClickOnCartButton()

   const checkoutPage = new CheckoutPage(page)
   await checkoutPage.ClickOnCheckoutButton()

   const placeOrder = new PlaceOrder(page)
   await placeOrder.EnterDetails()
   await placeOrder.ClickOnPlaceOrderButton(username)

   const reviewOrderDetails = new ReviewOrderDetails(page)
   await reviewOrderDetails.ClickOrdersButton()
 
});


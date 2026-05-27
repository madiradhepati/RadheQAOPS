//const {LoginPage} = require('./Login')
// const {SelectProduct} = require('./AddToCart')
// const {CheckoutPage} = require('./Checkout')
// const {PlaceOrder} = require('./SubmitOrder')
// const {ReviewOrderDetails} = require('./OrderDetails') 
import { LoginPage } from './Login';
import { SelectProduct } from './AddToCart';
import { CheckoutPage } from './Checkout';
import { PlaceOrder } from './SubmitOrder';
import { ReviewOrderDetails } from './OrderDetails';
export class ClassManager {
    page;
    loginPage;
    selectProduct;
    checkoutPage;
    placeOrder;
    reviewOrderDetails;
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.selectProduct = new SelectProduct(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.placeOrder = new PlaceOrder(this.page);
        this.reviewOrderDetails = new ReviewOrderDetails(this.page);
    }
    getLoginPage() {
        return this.loginPage;
    }
    getSelectProduct() {
        return this.selectProduct;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getPlaceOrder() {
        return this.placeOrder;
    }
    getReviewOrderDetails() {
        return this.reviewOrderDetails;
    }
}
module.exports = { ClassManager };

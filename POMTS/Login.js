export class LoginPage {
    username;
    password;
    loginbutton;
    page;
    constructor(page) {
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginbutton = page.locator("[value='Login']");
    }
    async LoginURL() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async LoginAction(username, password) {
        await this.username.type(username);
        await this.password.type(password);
        await this.loginbutton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = { LoginPage };

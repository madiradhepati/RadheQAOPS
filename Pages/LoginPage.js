//LoginPage is the class, 

exports.LoginPage = class LoginPage{

constructor(page){

    this.page = page //this.page is the class variable 
    this.LoginPage = page.goto('http://the-internet.herokuapp.com/login') 
    this.Username = page.locator('id=username') //object locator
    this.Password = page.locator('id=password') //object locator
    this.LoginButton = page.locator('#login > button > i') //object locator 
}
    //function
    async Login(Username,Password){
        await this.LoginPage
        await this.Username.fill(Username)
        await this.Password.fill(Password)
        await this.LoginButton.click()
    }
}

const by = require('protractor').by;
const element = require('protractor').element;
const EC = require('protractor').ExpectedConditions;

const RegisterPage = require('./RegisterPage').RegisterPage;
const HomePage = require('./HomePage').HomePage;
class LogInPage{
    constructor(){
        // Check Login Page is displayed
        browser.wait(EC.titleContains("Log in"), 3000, "Login Page is not displayed");
        this.initElement();
    }
    
    initElement(){
        this.txbEmail = element(by.id("id_username"));
        this.txbPassword = element(by.id("id_password"));
        this.btnLogIn = element(by.xpath("//form//button[contains(.,'Log in')]"));
        this.btnRegister = element(by.partialLinkText("signup"));
    }

    logIn(email, password){
        this.txbEmail.sendKeys(email);
        this.txbPassword.sendKeys(password);
        this.btnLogIn.click();
        return new HomePage();
    }

    openRegister(){
        this.btnRegister.click();
        return new RegisterPage();
    }
}

module.exports.LogInPage = LogInPage;
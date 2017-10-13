
const protractor = require('protractor');
var browser = protractor.browser;
var element = protractor.element;
var by = protractor.by;
var EC = protractor.ExpectedConditions;

const LogInPage = require('./LogInPage').LogInPage;

class RegisterPage {
    constructor() {
        // Check Register Page is displayed
        browser.wait(EC.titleContains("Sign Up"), 3000, "RegisterPage is not displayed");
        this.initElementLocator();
    }
    
    initElementLocator() {
        this.txbEmail = by.id("id_email");
        this.txbPassword = by.id("id_password");
        this.btnSubmit = by.xpath("//button[@type='submit']");
        this.btnLogin = by.partialLinkText("login");
        
    }

    register(email, password) {
        element(this.txbEmail).sendKeys(email);
        element(this.txbPassword).sendKeys(password);
        //element(this.btnSubmit).click();
    }

    openLoginPage() {
        element(this.btnLogin).click();
        return new LogInPage();
    }

}

// exports.RegisterPage = RegisterPage;
exports.RegisterPage = RegisterPage;
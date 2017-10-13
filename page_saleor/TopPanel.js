const by = require('protractor').by;
const element = require('protractor').element;
const EC = require('protractor').ExpectedConditions;
class TopPanel{
    constructor(){
        this.initElementLocator();
    }

    initElementLocator(){
        this.rootElement = by.tagName("header");
        this.btnRegister = by.xpath("//*[contains(@href,'signup')]");
        this.btnLogIn = by.xpath("//*[contains(@href,'login')]");
        this.btnLogOut = by.xpath("//*[contains(@href,'logout')]");
        this.btnYourCart = by.partialLinkText("cart");

        this.numOfSelectedProduct = by.className("badge");
    }

    openRegisterPage(){
        browser.wait(EC.elementToBeClickable(element(this.btnRegister)), 3000);
        element(this.btnRegister).click();
    }

    openLoginPage(){
        browser.wait(EC.elementToBeClickable(element(this.btnLogin)), 3000);
        element(this.btnLogin).click();
    }

    logOut(){
        element(this.btnLogOut).click();
    }

    getNumberOfSelectedProduct(){
        return element(this.numOfSelectedProduct).getAttribute('innerText');
    }
}

exports.TopPanel = TopPanel;
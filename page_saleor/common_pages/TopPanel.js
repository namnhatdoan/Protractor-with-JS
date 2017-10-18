const by = require('protractor').by;
const element = require('protractor').element;
const EC = require('protractor').ExpectedConditions;
const protractor = require('protractor');
const browser = protractor.browser;
class TopPanel{
    constructor(){
        this.initElementLocator();
        this.cart = new Cart();
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

    openCategories(){
        
    }
}

class Cart {
    constructor(){
        this.icoCart = by.className("cart__icon");
        this.cartDropdownBlock = by.className("cart-dropdown");
        this.btnCheckOut = by.xpath("//*[contains(concat(' ',@class,' '),' cart-dropdown ')]//a[.='Checkout']");
    }

    checkOut(){
        var btnCheckOutElement = element(this.btnCheckOut);
        if (btnCheckOutElement.isDisplayed()){
            btnCheckOutElement.click();
        }
        else {
            browser.actions().
            mouseMove(element(this.icoCart).getWebElement()).
            click(btnCheckOutElement.getWebElement()).
            perform();
        }
    }
}

exports.TopPanel = TopPanel;
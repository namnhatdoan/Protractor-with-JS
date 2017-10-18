//import {element, by, browser} from 'protractor';
//const RegisterPage = require("./RegisterPage").RegisterPage;
const pageObject = require("./index");
const RegisterPage = pageObject.RegisterPage;
const LogInPage = pageObject.LogInPage;
const TopPanel = pageObject.TopPanel;
const BooksPage = pageObject.BooksPage;

const by = require('protractor').by;
const element = require('protractor').element;
const EC = require('protractor').ExpectedConditions;


class HomePage {
    constructor() {
        this.initElement();
    }

    initElement() {
        this.topPanel = new TopPanel();
        this.menu = by.className("navbar-nav");
    }

    openRegisterPage() {
        this.topPanel.openRegisterPage();
        return new RegisterPage();
    }

    openLoginPage() {
        this.topPanel.openLoginPage();
        return new LogInPage();
    }

    openCategory(category){
        console.log("open Category..." + category);
        element(this.menu).element(by.xpath(".//a[contains(.,'" + category + "')]")).click();
        browser.wait(EC.visibilityOf(element(by.css(".product-filters"))));
        //console.log("open Category...");
        return new BooksPage();
    }
}

class HomePageValidation {
    constructor() {
        this.initElement();
        this.message = "User has been created";
        this.menu = by.className("navigation")
    }

    initElement() {
        this.topPanel = new TopPanel();
        this.alertMsg = by.css(".alert-success");
    }

    validateRegisterSuccessMsg() {
        expect(element(this.alertMsg).getText()).toBe(this.message);
        //element(this.alertMsg).getText();
    }
    /**
     * 
     * @param {*} expectedList : list of string contains name of the category
     */
    verifyListCategory(expectedList) {
        if (Array.isArray(expectedList)) {
            expectedList.forEach((expectedItem) => {
                var item = element(this.menu).element(by.xpath(".//a[contains(.,'" + expectedItem + "')]"));
                //console.log(expectedItem);
                //console.log(item.getAttribute("innerText"));
                //expect(await item.isDisplayed()).toBe(true);
                browser.wait(item.isDisplayed(), 3000);
            });
        }
    }

}

exports.HomePage = HomePage;
exports.HomePageValidation = HomePageValidation;
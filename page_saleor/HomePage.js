//import {element, by, browser} from 'protractor';
const RegisterPage = require("./RegisterPage").RegisterPage;
const LogInPage = require("./LogInPage").LogInPage;
const TopPanel = require("./TopPanel").TopPanel;
const by = require('protractor').by;
const element = require('protractor').element;

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
    async verifyListCategory(expectedList) {
        if (Array.isArray(expectedList)) {
            expectedList.array.forEach(async function (element) {
                var item = await element(this.menu).element(by.xpath("//a[.='" + element + "'"));
                expect(item.isDisplayed()).toBe(true);
            }, this);
        }
    }

}

exports.HomePage = HomePage;
exports.HomePageValidation = HomePageValidation;
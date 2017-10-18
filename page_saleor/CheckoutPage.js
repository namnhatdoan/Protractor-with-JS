const by = require("protractor");

class CheckoutLoginPage {
    constructor(){
        this.initElementLocator();
    }

    initElementLocator(){
        this.continuePanel = by.className("checkout__login__continue");
        this.loginForm = by.className("checkout__login__form");
        
        this.btnContinue = by.css(".checkout__login__continue a");
        // Login Form element ...
    }

    continueAsNewCustomer(){
        element(this.btnContinue).click()
        // Waiting ...
    }
}

class CheckoutSummaryPage {
    constructor(){
        this.initElementLocator();
    }

    initElementLocator(){
        this.txbEmail = by.id("id_email");
        this.txbPhone = by.id("id_phone");
        this.txbGivenName = by.id("id_first_name");
        this.txbFamilyName = by.id("id_last_name");
        this.txbCompany = by.id("id_company_name");
        this.txbAddress1 = by.id("id_street_address_1");
        this.txbAddress2 = by.id("id_street_address_2");
        this.txbCity = by.id("id_city");
        this.txbState = by.id("id_country_area");
        this.txbZipCode = by.id("id_postal_code");
        this.cbbCountry = by.id("id_country");
        this.btnPlaceOrder = by.buttonText("Place order");
    }

    setBillingAddress(email, phone, firstName, lastName, company, address1, address2, city, state, zipCode, country){
        
    }
}

exports.CheckoutLoginPage = CheckoutLoginPage;
exports.CheckoutSummaryPage = CheckoutSummaryPage;
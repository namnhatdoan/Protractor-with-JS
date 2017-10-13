// // import {RegisterPage} from './RegisterPage';
const Register = require('../page_saleor/RegisterPage').RegisterPage;
const HomePage = require("../page_saleor/HomePage").HomePage;
const HomePageValidation = require("../page_saleor/HomePage").HomePageValidation'
const protractor = require('protractor');
var browser = protractor.browser;

var baseURL = "http://192.168.74.230/";

// Prepare Data


describe("Register", function () {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get(baseURL);
        this.homePage = new HomePage();
    })

    AccountData.forEach((data, iterator) => {
        it(data.email + " as an customer", function () {
            var registerPage = this.homePage.openRegisterPage();
            registerPage.register(data.email, data.password);
            // TODO: Validate
        });
    });
})

xdescribe("Set admin privilege for ", function(){
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://192.168.74.205/phppgadmin/");
    });
    
    it(AccountData.get(1).email, function(){
        
    });
})

describe("Saleor -", function(){
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get(baseURL);
        this.homePage = new HomePage();
        this.homePageValidate = new HomePageValidation()
        //this.loginPage = homePage.openLoginPage();
        //this.loginPage.logIn("email1@email.com", "123");
    });

    it("Scenario 1", function(){
        // Verify there is enough 4 categories
        this.homePageValidate.verifyListCategory(["Accessories", "Books", "Apparel", "Groceries"]);
        // Verify 0 product in Cart
        
        // Open Book category

        // Filter English and price between 18-20

        // Verify all prices of returned book has prices in selected range

    });

    it("Scenario 2", function(){
        // Open Book category

        // Select the cheapest book

        // Verify the price is equal with previous page

        // Add to cart

        // Verify number of seleted product in cart icon is 1

        // Check out

        // Verify register link is displayed

        // Click continue to register

        // Verify the quantity and price is correct

        // Enter the random info in Shipping Address

        // Click on Continue

        // Select a random way to shipping and OK

        // Select Order & Pay

        // Save the ID of order

        // Verify quantity, price are correct

        // Click on Proceed to payment

        // Select Confirmed/passed/3DSdisbale/confirmed

        // Save change

        // Verify thankyou message

        // Check the DB for the order

        // Enter a password to create Account

        // Verify that account is created in DB

    });
    
    it("Scenario 3", function(){
        // Register an account

        // Set admin privillege for that account

        // Go to the dashboard

        // Verify the previous order (search with the ID)


    });

})


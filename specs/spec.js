// // import {RegisterPage} from './RegisterPage';
const pageObj = require("../page_saleor/index");
const Register = pageObj.RegisterPage;
const HomePage = pageObj.HomePage;
const HomePageValidation = pageObj.HomePageValidation;
const BookDetailPage = pageObj.BookDetailPage;

const protractor = require('protractor');
var browser = protractor.browser;

var baseURL = "http://192.168.74.230/";

// Prepare Data


xdescribe("Register", function () {
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

describe("Saleor -",function(){
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get(baseURL);
        this.homePage = new HomePage();
        this.homePageValidate = new HomePageValidation();
        this.bookDetailPage = new BookDetailPage();
    });

    it("Scenario 1: Filtering",function(){
        // Verify there is enough 4 categories
        this.homePageValidate.verifyListCategory(["Accessories", "Books", "Apparel", "Groceries"]);
        // Verify 0 product in Cart
        expect(this.homePage.topPanel.getNumberOfSelectedProduct()).toEqual(0);
        // Open Book category
        booksPage = this.homePage.openCategory("Books");
        
        // Filter English and price between 18-20
        booksPage.filter.setLanguage(["English"]);
        booksPage.filter.setPriceRange(0,10);
        // Verify all prices of returned book has prices in selected range
        booksPage.verifyPriceRangeFilter(0,10);
    });

    xit("Scenario 2: Buy the cheapest book", function(){
        // Open Book category
        booksPage = this.homePage.openCategory("Books");
        // Select the cheapest book
        var book = booksPage.getCheapestProductElement();
        var price = booksPage.getCheapestPrice();
        book.click();
        // Verify the price is equal with previous page
        expect(this.bookDetailPage.getPrice()).toEqual(price);
        // Add to cart
        quantity = 1;
        this.bookDetailPage.addToCart(quantity);
        // Verify number of seleted product in cart icon is 1
        var numOfProduct = this.bookDetailPage.topPanel.getNumberOfSelectedProduct();
        expect(numOfProduct).toEqual(quantity);
        // Check out
        this.bookDetailPage.topPanel.cart.checkOut();
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


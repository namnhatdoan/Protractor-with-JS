const by = require('protractor').by;
const Categories = require('./Categories').Categories;
const element = require('protractor').element;
const browser = require('protractor').browser;
const EC = require('protractor').ExpectedConditions;

class BooksPage extends Categories{
    constructor(){
        super();
        console.log("Init BooksPage ...");
        this.filter = new Filter();
    }

    //verifyPriceRangeFilter(min, max){
        // console.log("Min " + min);
        // console.log("Max " + max);
        // var listProduct = super.getProducts();
        // //console.log(typeof listProduct);
        // console.log(listProduct);
        // listProduct.forEach(product => {
        //     console.log(product.price);
        //     if (product.price < min || product.price > max) return true;
        // })
    //}
    verifyPriceRangeFilter(min, max){
        //var regexFloat = "/[+-]?\d+(\.\d+)?/g";
        var regex = /[+-]?\d+(\.\d+)?/g;
        console.log("verify Price Filter ...");
        var listElement = this.getProductElements();
        var count = 0;
        listElement.each(elem => {
            elem.element(by.xpath(".//*[@itemprop='price']")).getText().then(price => {
                var price_nor = price.match(regex);
                console.log(price_nor[0]);
                expect(price_nor[0]).toBeGreaterThanOrEqual(min);
                expect(price_nor[0]).toBeLessThanOrEqual(max);
            })
        })
    }

}

class Filter{
    constructor(){
        console.log("init Books filter...");
        this.initElementLocator();
    }

    initElementLocator(){
        this.lnkClearFilter = by.css(".clear-filters");
        this.mnuLanguage = by.id("language");
        this.txbMinPrice = by.xpath("//*[@class='product-filters__price-range']//input[@placeholder='from']");
        this.txbMaxPrice = by.xpath("//*[@class='product-filters__price-range']//input[@placeholder='to']");
        this.btnUpdate = by.xpath("//*[@class='product-filters__price-range']//button");
    }

    setLanguage(languages){
        console.log("set Language ...")
        languages =  (Array.isArray(languages)) ? languages : [languages];
        languages.forEach((language) => {
            //console.log(language);
            let lblLang = element(this.mnuLanguage).element(by.xpath(".//label[text()='" + language +"']"));
            browser.executeScript("arguments[0].scrollIntoView();", lblLang.getWebElement());
            lblLang.click();
            browser.wait(EC.urlContains("language=" + language.toLowerCase()));
        });
    }

    setPriceRange(min, max){
        element(this.txbMinPrice).sendKeys(min);
        element(this.txbMaxPrice).sendKeys(max);
        element(this.btnUpdate).click();
        browser.wait(EC.urlContains("maxPrice=" + max));
    }
}

exports.BooksPage = BooksPage;
exports.Filter = Filter;
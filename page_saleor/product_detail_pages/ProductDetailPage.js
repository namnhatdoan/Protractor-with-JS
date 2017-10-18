const TopPanel = require("../index").TopPanel;

class ProductDetailPage {
    constructor(){
        this.initElementLocator();
        this.topPanel = new TopPanel();
    }

    initElementLocator(){
        this.lblName = by.className("product__info__name");
        this.lblPrice = by.xpath("//*[contains(concat(' ',@class,' '), ' product__info__price ')]/span")
        this.txbQuantity = by.id("id_quantity");
        this.btnAddToCart = by.css(".product__info__button button");
    }

    // Need to verify this code that which can affect to value attribute
    addToCart(quantity){
        if (quantity) element(this.txbQuantity).setAttribute("value", 3);
        element(this.btnAddToCart).click();
    }

    async getName(){
        return await element(this.lblName).getText();
    }

    async getPrice(){
        return await element(this.lblPrice).getText();
    }
}

exports.ProductDetailPage = ProductDetailPage;
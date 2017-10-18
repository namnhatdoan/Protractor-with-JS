const by = require("protractor").by;

class CartPage {
    constructor(){

    }

    // initElementLocator(){
    //     this.products = by.className("cart__line");
    // }

    getProductElement(productName){
        var xpath = "//*[contains(concat(' ',@class,' '), ' cart__line ') and .//p[contains(., '" + productName + "')]]";
        return element(by.xpath(xpath));
    }

    getQuantity(productName){
        var productElem = getProductElement(productName);
        return productElem.element(by.xpath(".//*[@id='id_quantity']")).getAttribute("value");
    }

    setQuantity(productName, quantity){
        var productElem = getProductElement(productName);
        productElem.element(by.xpath(".//*[@id='id_quantity']")).getAttribute
    }

    checkOut(){
        element(by.xpath("//*[contains(concat(' ',@class,' '), ' cart ')]//a[contains(.,'Checkout')]"));
    }
}

exports.CartPage = CartPage;
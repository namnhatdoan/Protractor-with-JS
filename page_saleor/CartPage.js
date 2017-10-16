import {by} from 'protractor';

class CartPage {
    constructor(){

    }

    // initElementLocator(){
    //     this.products = by.className("cart__line");
    // }

    async getProductElement(productName){
        var xpath = "//*[contains(concat(' ',@class,' '), ' cart__line ') and .//p[contains(., '" + productName + "')]]";
        return await element(by.xpath(xpath));
    }

    async getQuantity(productName){
        var productElem = await getProductElement(productName);
        return await productElem.element(by.xpath(".//*[@id='id_quantity']")).getAttribute("value");
    }

    async setQuantity(productName, quantity){
        var productElem = await getProductElement(productName);
        productElem.element(by.xpath(".//*[@id='id_quantity']")).getAttribute
    }

    async checkOut(){
        await element(by.xpath("//*[contains(concat(' ',@class,' '), ' cart ')]//a[contains(.,'Checkout')]"));
    }
}

exports.CartPage = CartPage;
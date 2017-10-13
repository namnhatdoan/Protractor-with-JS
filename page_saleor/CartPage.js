
class CartPage {
    constructor(){

    }

    initElementLocator(){
        this.products = by.className("cart__line");

    }

    async getProductElement(productName){
        var xpath = "//*[contains(concat(' ',@class,' '), ' cart__line ') and .//p[contains(., '" + productName + "')]]";
        return await element(by.xpath(xpath));
    }

    async getQuantity(productName){
        var productElem = await getProductElement(productName);
        return await productElem.element(by.xpath(".//*[@id='id_quantity']")).getAttribute("value");
    }

    setQuantity(productName, quantity){
        var productElem = await getProductElement(productName);
        productElem.element(by.xpath(".//*[@id='id_quantity']")).getAttribute
    }
}

exports.CartPage = CartPage;
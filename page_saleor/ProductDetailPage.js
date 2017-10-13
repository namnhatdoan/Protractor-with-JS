
class ProductDetailPage {
    constructor(){
        this.initElementLocator();
    }

    initElementLocator(){
        this.lblName = by.className("product__info__name");
        this.lblPrice = by.xpath("//*[contains(concat(' ',@class,' '), ' product__info__price ')]/span")
        this.txbQuantity = by.id("id_quantity");
        this.btnAddToCart = by.className("product__info__button");
    }

    addToCart(quantity){
        element(this.txbQuantity)
    }

    async getName(){
        return await element(this.lblName).getText();
    }

    async getPrice(){
        return await element(this.lblPrice).getText();
    }
}

exports.ProductDetailPage = ProductDetailPage;
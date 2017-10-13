const by = require('protractor').by;

class AccessoriesPage {
    constructor(){
        this.initElement();
    }

    initElement(){
        this.filter = new Filter();
        this.btnLoadMore = element(by.buttonText("Load more"));
        
    }

    async getCheapestProductElement(){
        var listProducts = await this.getProducts();
        var cheapestPrice = "$0";
        listProducts.array.forEach((el) => {
            let price = await el.element(by.xpath(".//*[@itemprop='price']")).getAttribute('innerText');
            if (cheapestPrice == "$0") {
                cheapestPrice = price;
            }
            else if (price < cheapestPrice){
                cheapestPrice = price;
            }
        });
        
        return this.getProduct({price: cheapestPrice});
    }

    async getProductElements(){
       return await element.all(by.css(".product-list"));
    }

    /**
     * 
     * @param {*} condition.price and condition.title
     */
    getProductElement(condition){
        titleCondition = (condition.title) ? "and .//*[@title=" + condition.title +"]" : "";
        priceCondition = (condition.price) ? "and .//*[@itemprop='price' and text()="+ condition.price +"]" : "";
        xPath = "//*[contains(concat(' ',@class,' '),' product-list ') "+ titleCondition + " " + priceCondition +"]";
        console.log("Search product with this xPath Locator: " + xPath);
        return element(by.xpath(xPath));
    }

}

exports.Categories = Categories;
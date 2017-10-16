const by = require('protractor').by;

class Categories {
    constructor(){
        this.initElement();
    }

    initElement(){
        //this.filter = new Filter();
        this.btnLoadMore = element(by.buttonText("Load more"));
        
    }

    getCheapestProductElement(){
        var listProducts = this.getProductElements();
        var cheapestPrice = "$0";
        listProducts.forEach((el) => {
            let price = el.element(by.xpath(".//*[@itemprop='price']")).getAttribute('innerText');
            if (cheapestPrice == "$0") {
                cheapestPrice = price;
            }
            else if (price < cheapestPrice){
                cheapestPrice = price;
            }
        });
        
        return this.getProduct({price: cheapestPrice});
    }

    getProducts(){
        var listElem = element.all(by.css(".product-list"));
        var count = 0;
        var listProduct =  listElem.map(function(elem) {
            //console.log("elem " + count);
            var price = elem.element(by.xpath(".//*[@itemprop='price']")).getAttribute("innerText");
            var title = elem.element(by.xpath(".//*[@title]")).getAttribute("innerText");
            price = price.replace("$", "");
            return new Product(title, price);
        });
        return listProduct;
    }

    getProductElements(){
       return element.all(by.css(".product-list"));
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

class Product {
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
}

exports.Categories = Categories;
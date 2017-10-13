const by = require('protractor').by;
const Categories = require('./Categories').Categories;
class BooksPage extends Categories{
    constructor(){
        this.filter = new Filter();
    }
}

class Filter{
    constructor(){
        initElement();
    }

    initElement(){
        this.lnkClearFilter = element(by.css(".clear-filters"));
        this.btnBrand = element()
    }
}

exports.BooksPage = BooksPage;
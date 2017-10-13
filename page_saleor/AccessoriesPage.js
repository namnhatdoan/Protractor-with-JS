const by = require('protractor').by;
const Categories = require('./Categories').Categories;
class AccessoriesPage extends Categories{
    constructor(){
        this.initElement();
    }

    initElement(){
        this.filter = new Filter();
        this.btnLoadMore = element(by.buttonText("Load more"));
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
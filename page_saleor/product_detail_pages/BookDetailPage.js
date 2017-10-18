const ProductDetailPage = require("./ProductDetailPage").ProductDetailPage;

class BookDetailPage extends ProductDetailPage{
    constructor(){
        super();
        this.initElementLocator();
    }

    initElementLocator(){
        // Add any neccessary elements
    }
}

exports.BookDetailPage = BookDetailPage;
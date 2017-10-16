
class SummaryPage {
    constructor(){
        this.initElementLocator();
    }

    initElementLocator(){
        this.header = by.css(".order-details__header");
        this.address = by.css(".order-details__addresses address");
        this.product = by.css(".order-details__product.table__row");
    }
}

exports.SummaryPage = SummaryPage;
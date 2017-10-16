
class PayForOder {
    constructor(){

    }

    initElementLocator(){
        this.lblOrderID = by.css(".checkout h1");
        this.btnProceed = by.xpath("//*[@id='id_method']/following-sibling::button");

    }


}


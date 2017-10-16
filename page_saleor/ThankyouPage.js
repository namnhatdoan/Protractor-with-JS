
class ThankyouPage {  
    constructor(){
        this.initElementLocator();
    }

    initElementLocator(){
        this.frmCreateAccount = by.tagName("form");
        this.txbPassword = by.id("id_password");
        this.btnCreateAccount = by.xpath("//form//button");
    }

    createAccount(password){
        element(this.txbPassword).sendKeys(password);
        element(this.btnCreateAccount).click();
    }
}

exports.ThankyouPage = ThankyouPage;
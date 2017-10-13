const by = require('protractor').by;

var USERNAME = "saleor";
var PASSWORD = "saleor";

class PgAdmin {
    constructor() {
        this.initElement();
    }

    initElement() {
        this.postgreSQL = by.css("#wfxt-6 > div.webfx-tree-row.selected > a.webfx-tree-item-label");
    }

    connectDB() {
       element(this.postgreSQL).click();
       return new LogInPage();
    }

    selectTable(dbName,schemaName, tableName){

    }

    openDB(dbName){
        // //*[@id="wfxt-8"]/div[1]/a[2]
        // //*[@id="wfxt-10"]/div[1]/a[2]
    }
}

class LogInPage{
    constructor(){
        this.initElement();
    }

    initElement(){
        this.txbUsername = by.name("loginUsername");
        this.txbPassword = by.id("loginPassword");
        this.btnLogIn = by.name("loginSubmit");
    }

    login(){
        element(this.txbUsername).sendKeys(USERNAME);
        element(this.txbPassword).sendKeys(PASSWORD);
        element(this.btnLogIn).click();
    }
}

exports.PgAdmin = PgAdmin;
import {by} from 'protractor';

var Status = {
    WAIT_FOR_CONFIRMATION : "waiting",
    PRE_AUTHRIZED: "waiting",
    CONFIRMED: "confirmed",
    REJECTED: "rejected",
    REFUNDED: "refunded",
    ERROR: "error",
    INPUT: "input",
}

var FraudStatus = {
    UNKNOWN: "unknown",
    PASSED: "accept",
    REJECTED: "reject",
    REVIEW: "review",
}

var GatewayResponse = {
    _3DS_DISABLED :"3ds-disable",
    _3DS_REDIRECT: "3ds-redirect",
    GATEWAY_CONNECTION_ERROR: "failure",
    GATEWAY_RETURNED_UNSUPPORTED_RESPONSE: "payment-error",
}

var VerificationResult = {
    WAIT_FOR_CONFIRMATION : "waiting",
    PRE_AUTHRIZED: "waiting",
    CONFIRMED: "confirmed",
    REJECTED: "rejected",
    REFUNDED: "refunded",
    ERROR: "error",
    INPUT: "input",
}

class PaymentPage {
    constructor(){
        this.initElementLocator();
    }

    initElementLocator(){
        this.cbbStatus = by.id("id_status");
        this.cbbFraudStatus = by.id("id_fraud_status");
        this.cbbGatewayResponse = by.id("id_gateway_response");
        this.cbbVerificationResult = by.id("id_verification_result");
        this.btnSave = by.xpath("//*[@id='payment-form']//button");
    }

    /**
     * 
     * @param {*} status - an properties of Status. Ex: Status.CONFIRMED
     * @param {*} fraudStatus - an properties of FraudStatus: Ex: FraudStatus.PASSED
     * @param {*} gatewayResponse - an properties ...
     * @param {*} verificationResult - an properties ...
     */
    setPaymentOption(status, fraudStatus, gatewayResponse, verificationResult){
        this.setStatus(status);
        this.setFraudStatus(fraudStatus);
        this.setGatewayResponse(gatewayResponse);
        this.setVerificationResult(verificationResult);
    }

    setStatus(status){
        element(this.cbbStatus).click();
        element(this.cbbStatus).element(by.xpath(".//option[@value='"+ status +"']")).click();
    }


    setFraudStatus(fraudStatus){
        element(this.cbbFraudStatus).click();
        element(this.cbbFraudStatus).element(by.xpath(".//option[@value='"+ fraudStatus +"']")).click();
    }

    setGatewayResponse(gatewayResponse){
        element(this.cbbGatewayResponse).click();
        element(this.cbbGatewayResponse).element(by.xpath(".//option[@value='"+ gatewayResponse +"']")).click();
    }

    setVerificationResult(verificationResult){
        element(this.cbbVerificationResult).click();
        element(this.cbbVerificationResult).element(by.xpath(".//option[@value='"+ verificationResult +"']")).click();
    }

    save(){
        element(this.btnSave).click();
        // wait for browser navigation
    }
}

exports.PaymentPage = PaymentPage;
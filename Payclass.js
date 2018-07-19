class Payment {
    pay(mode) {
        if (mode instanceof Creditcard) {
            console.log("you have Choosen Credit card option");
            console.log(mode.cardnumber);
            console.log(mode.cvv);
            console.log(mode.name);
        }
        if (mode instanceof Debitcard) {
            console.log("you have Choosen Debit card option");
            console.log(mode.cardnumber);
            console.log(mode.cvv);
            console.log(mode.name);
        }
        if (mode instanceof COD) {
            console.log("you have Choosen Cash on Delivery option");
            console.log(mode.name);
            console.log(mode.address);
            console.log(mode.landmark);
            console.log(mode.pincode);
        }
        if (mode instanceof PAYTM) {
            console.log("you have Choosen Paytm option");
            console.log(mode.mobilenumber);
        }
    }
}
class Card {
    set Cardnumber(cardnumber) {
        this.cardnumber = cardnumber;
    }
    get Cardnumber() {
        return this.cardnumber;
    }
    set CVV(cvv) {
        this.cvv = cvv;
    }
    get CVV() {
        return this.cvv;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
}
class Creditcard extends Card {
}
class Debitcard extends Card {
}
class COD {
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Address(address) {
        this.address = address;
    }
    get Address() {
        return this.address;
    }
    set Landmark(landmark) {
        this.landmark = landmark;
    }
    get Landnmark() {
        return this.landmark;
    }
    set Pincode(pincode) {
        this.pincode = pincode;
    }
    get Pincode() {
        return this.pincode;
    }
}
class PAYTM {
    set MobileNumber(mobilenumber) {
        this.mobilenumber = mobilenumber;
    }
    get MobileNumber() {
        return this.mobilenumber;
    }
}
var User = new Payment();
// var credit=new Creditcard();
// credit.cvv=321;
// credit.name="sateesh";
// credit.cardnumber=32041520093
// User.pay(credit);
// var Debit=new Debitcard();
// Debit.cardnumber=3204512655;
// Debit.cvv=354;
// Debit.name="Suresh";
// User.pay(Debit);
// var cod=new COD();
// cod.name="sateesh";
// cod.landmark="Near Abhayanjaneya Tempel";
// cod.address="Uppal New SahnthiNagar";
// cod.pincode=500039;
// User.pay(cod);
var paytm = new PAYTM();
paytm.mobilenumber = 9989069470;
User.pay(paytm);

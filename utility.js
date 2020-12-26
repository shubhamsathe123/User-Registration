class utility{
    PROMPT = require('prompt-sync')();
    FIRSTNAME = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    LASTNAME = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    EMAIL=RegExp('^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$');
    MOBILE=RegExp('^([0-9]{1,3}[ ]+)?[0-9]{10}$');
    PASSWORD=RegExp('^([A-Z]{1,})*([(@#$*)-])*[a-zA-Z0-9]{6,}$');
    firstName = (fname) =>{
      if(this.FIRSTNAME.test(fname)){
        return this.FIRSTNAME.test(fname);
      }
      else {
        fname=this.PROMPT("Invalid!! enter your valid first name : ");
        this.firstName(fname);
      }
    }
    lastName = (lname) =>{
        if(this.LASTNAME.test(lname)){
          return this.LASTNAME.test(lname);
        }
        else {
         lname=this.PROMPT("Invalid!! enter your valid last name : ");
          this.lastName(lname);
        }
    }
    emailCheck = (email) =>{
        if(this.EMAIL.test(email)){
            return this.EMAIL.test(email);
        }
        else{
          email=this.PROMPT("Invalid!! enter your valid email: ");
          this.emailCheck(email);
        }
    }
    mobileCheck = (number) =>{
        if(this.MOBILE.test(number)){
          return this.MOBILE.test(number);
        }
        else{
          number=this.PROMPT("Invalid!! enter your valid mobile no: ");
          this.mobileCheck(number);
        }
    }
    passwordCheck = (pwd) => {
        if(this.PASSWORD.test(pwd)) {
          return this.PASSWORD.test(pwd);
        }
        else {
          pwd=this.PROMPT("Invalid!! enter your valid password: ");
          this.passwordCheck(pwd);
        }
    }

}
module.exports=new utility;
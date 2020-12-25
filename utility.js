class utility{
    PROMPT = require('prompt-sync')();
    FIRSTNAME = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    LASTNAME = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    EMAIL=RegExp('^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$');
    MOBILE=RegExp('^([0-9]{1,3}[ ]+)?[0-9]{10}$');
    PASSWORD=RegExp("^([A-Z]{1,})*([(@#$*)-])*[a-zA-Z0-9]{6,}$");
    firstName = (fname) =>
    {
      if(this.FIRSTNAME.test(fname))
      {
          console.log(`${fname} is valid first name `)
      }
      else
      {
        const fname=this.PROMPT("enter your valid first name again :");
        this.firstName(fname);
      }
    }

    lastName = (lname) =>
    {
        if(this.LASTNAME.test(lname))
        {
            console.log(`${lname} is valid last name `)
        }
        else
        {
          const lname=this.PROMPT("enter your valid last name again :");
          this.firstName(lname);
        }
    }

    emailCheck = (email) =>
    {
        if(this.EMAIL.test(email))
        {
            console.log(`${email} is valid email id `)
        }
        else
        {
          const email=this.PROMPT("enter your valid email again :");
          this.emailCheck(email);
        }
    }
    mobileCheck = (number) =>
    {
        if(this.MOBILE.test(number))
        {
            console.log(`${number} is valid mobile no `)
        }
        else
        {
          const number=this.PROMPT("enter your valid mobile no again :");
          this.mobileCheck(number);
        }
    }

    passwordCheck = (pwd) =>
    {
        if(this.PASSWORD.test(pwd))
        {
            console.log(`${pwd} is valid password `)
        }
        else
        {
          const pwd=this.PROMPT("enter your valid password again :");
          this.passwordCheck(pwd);
        }
    }

}
module.exports=new utility;
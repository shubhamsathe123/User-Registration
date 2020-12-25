class utility{
    PROMPT = require('prompt-sync')();
    FIRSTNAME = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    LASTNAME = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    EMAIL=RegExp('^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$');
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

}
module.exports=new utility;
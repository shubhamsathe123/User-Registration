class utility{
    PROMPT = require('prompt-sync')();
    FIRSTNAME = RegExp(`^[A-Z]{1}[a-z]{2,}$`);
    firstName = (fname) =>
    {
      if(this.FIRSTNAME.test(fname))
      {
          console.log(`${fname} is valid first name `)
      }
      else
      {
        const fname=this.PROMPT("enter your valid first name again");
        this.firstName(fname);
      }
    }

}
module.exports=new utility;
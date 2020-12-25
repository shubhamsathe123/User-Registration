console.log("****welcome to user registration form****");
const util=require("./utility");

const prompt = require('prompt-sync')();
const fname=prompt("enter your first name");
util.firstName(fname);
const lname =prompt("enter your last name");
util.lastName(lname);
const email =prompt("enter your email");
util.emailCheck(email);
const number =prompt("enter your mobile no");
util.mobileCheck(number);
const pwd =prompt("enter your password");
util.passwordCheck(pwd);
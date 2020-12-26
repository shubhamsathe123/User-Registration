console.log("****welcome to user registration form****");
const util=require("./utility");
const prompt = require('prompt-sync')();

const fname=prompt("1)enter your first name ");
util.firstName(fname)
console.log(`correct format`);

const lname =prompt("2)enter your last name ");
util.lastName(lname);
console.log(`correct format`);

const email =prompt("3)enter your email ");
util.emailCheck(email);
console.log(`correct format`);

const number =prompt("4)enter your mobile no ");
util.mobileCheck(number);
console.log(`correct format`);

const pwd =prompt("5)enter your password ");
util.passwordCheck(pwd);
console.log(`correct format`);
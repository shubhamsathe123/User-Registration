console.log("****welcome to user registration form****");
const util=require("./utility");

const prompt = require('prompt-sync')();
const fname=prompt("enter your first name");
util.firstName(fname);

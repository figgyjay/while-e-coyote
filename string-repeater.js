const prompt = require('prompt-sync')({sigint: true})

let bigstring = ""
let inputstring = prompt("enter a string");

while(bigstring.length < 10);{
    bigstring = inputstring + bigstring
    console.log(bigstring)
}
const prompt = require('prompt-sync')({sigint: true})

let x = number(prompt("enter : "));
let y = number(prompt("enter y: "));

while( x % y !== 0){
    console.log(x)
    x++;
}

console.log(" ${x} can be divided by ${y} ")
const prompt = require('prompt-sync')({sigint: true})

let variable = true
let input = 0;
input = Number(prompt("Enter a number"));

while(variable === true);{
 if(input <= 100){
     console.log(input)
 }
 else if (input >= 100){
     variable = false
     console.log(input)
 }
}

const prompt = require('prompt-sync')({sigint: true})


console.log("enter some numbers and type done when complete");

let num = (prompt(">"));
let total = (0);

while(num !== "done"){
    total = total + Number(num);
    num = prompt(">");
}

console.log("Combined total:" + total);
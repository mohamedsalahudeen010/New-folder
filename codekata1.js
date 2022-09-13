// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let a;
inp.on("line", (data) => {
    
    // Input data process here
    a=data;
    
});

inp.on("close", () => {

    // Output data process here
    for(let i =0; i<a.length; i++){
     console.log(a[i]);
}
});

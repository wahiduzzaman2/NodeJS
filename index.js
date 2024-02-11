// console.log("hello World")


////........... File Based

// const a = 400;

// console.log(a);

// const a = {
//     average: (a,b)=>{
//         console.log((a+b)/2);

//     },
//     percent: (a,b)=>{
//         console.log((a/b)*100);
//     },
// };

// module.exports = a;


////.........Build In

// const fs = require("fs");

// console.log(fs);

// fs.readFile("./sample.txt", "utf-8", (err, data)=>{
//     if(err) {

//         throw err;

//     }
//     console.log(data);
// });

//Asynchronize

//Let's do synchronize

// const a = fs.readFileSync("./sample.txt", "utf-8");

// console.log(a);
// console.log("Hello");

//.........path

// const path = require("path")

// const a = path.extname("/node/index.js");

// console.log(a);


///......os

// const os = require("os");

// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.totalmem());


const pokemon = require("pokemon");

console.log(pokemon.random());

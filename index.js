// // const http = require("http");
// //common JS version of importing modules

// //new
// // import f, {x,y} from "./features.js"

// import * as newObj from './features.js'
// import {coolness} from './coolness.js'
// //new ES module version
// import http from "http"
// import fs from "fs"

// // const x = fs.readFileSync("./notes.txt", (err, data)=>{
    
// // })
// // console.log(x);
// newObj.x();
// newObj.y();

// //old
// // const f = require("./features")

// // f();
// const server  = http.createServer((req,res)=>{
//     console.log(req.method);
//     if(req.url==="/"){
//         res.end("<h1>This is the home page</h1>")
//     }else if(req.url=="about"){
//         res.end("<h1>This is the about page of the application</h1>")
//     }else if(req.url=="/contactus"){
//         res.end("<h1>This is the contact us page of the application</h1>")
//     }else if(req.url=="/arpit"){
//         res.end(`<h1>arpit is ${coolness()}% cool</h1>`)
        
//     }else{
//         res.end("<h1>404: Page not found</h1>")
//     }
// });



// server.listen(1000, ()=>{
//     console.log("Server is listening");
// })


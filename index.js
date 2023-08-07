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

import express from "express";
import fs from "fs";
import path from "path"


const app = express();

app.use(express.static(path.join(path.resolve(),"./public")));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    const pathname = path.resolve();
    res.render("index.ejs", {name: "arpit"});
})
// app.get("/not-found",(req,res)=>{
//     res.status(404).send("bhai, kuch nahi mila server pe");
// })

// app.get("/get-products",(req,res)=>{
//     res.json(
//         {
//             "name": "arpit",
//             email:"arpit@gmai;.com",
//             products: ["shampoo", "headphones", "phones"]
//         }
//     )
// })
// app.get("/render-html",(req,res)=>{
//     const pathname = path.resolve();
//     res.sendFile(path.join(pathname, "./index.html"))
//})

// app.get("/ejs-tutorial",(req,res)=>{
    
// })

const users = [];

app.get("/success",(req,res)=>{
    res.render("success.ejs")
})

app.get("/users",(req,res)=>{
    res.json({
        users
    })
})

app.post("/contact", (req,res)=>{
    users.push({username: req.body.username, password: req.body.password});

    res.redirect("/success")
})

app.listen(5000, ()=>{
    console.log("Server is listening at 5000");
});
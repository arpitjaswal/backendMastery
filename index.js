
import express from "express";
import fs from "fs";
import path from "path";
import mongoose, { mongo } from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();


app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"masterBackend",
})
.then(
    ()=>console.log("DB connected")
)
.catch(()=>console.log("couldn't connect"))


const messageSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
})

const user = mongoose.model("user", messageSchema);

app.use(express.static(path.join(path.resolve(),"./public")));
app.use(express.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     const pathname = path.resolve();
//     res.render("index.ejs", {name: "arpit"});
// })

const productSchema = new mongoose.Schema({
    name:String,
    quantity: Number,
    description: String,
    availableOrNot:Boolean,
})

const product = new mongoose.model("Products", productSchema);


app.get("/",(req,res)=>{
    res.render("homePage.ejs");
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.post("/login", (req,res)=>{
    const {kukdu} = req.cookies;
    if(kukdu){
        const decoded = jwt.verify(kukdu,"secretweep");
        req.user =decoded;
        res.render("logout.ejs");
    }
    else{
        res.render("login.ejs");
    }
})

app.get("/signUp", (req,res)=>{
    res.render("signUp.ejs");
})

app.post("/signUp",async (req,res)=>{
    const {name, username, password} = req.body;
    await user.create({name, username, password});

    const token = jwt.sign({_id: user._id},"secretkey");
    res.cookie("token", token, {
        httpOnly:true,
        expires: new Date(Date.now()+60*1000),
    });
    res.redirect("/products");
})
app.get("/products", (req,res)=>{
    res.render("products.ejs");
})

app.post("/addProducts", async (req,res)=>{
    const {name, quantity, description, availableOrNot} = req.body;
    await product.create({name, quantity, description, availableOrNot});
    res.render("products.ejs");
})

app.get("/addProducts",(req,res)=>{
        res.render("addProducts.ejs")
})

app.get("/logout",(req,res)=>{
        res.cookie("kukdu", null,{
        httpOnly:true,
        expires:new Date(Date.now())
        });
        res.redirect("/");
})

app.listen(5000, ()=>{
    console.log("Server is listening at 5000");
});
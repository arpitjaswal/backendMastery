
import express from "express";
import fs from "fs";
import path from "path";
import mongoose, { mongo } from "mongoose";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"masterBackend",
})
.then(
    ()=>console.log("DB connected")
)
.catch(()=>console.log("couldn't connect"))


const messageSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const user = mongoose.model("user", messageSchema);

app.use(express.static(path.join(path.resolve(),"./public")));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    const pathname = path.resolve();
    res.render("index.ejs", {name: "arpit"});
})

const users = [];

app.get("/success",(req,res)=>{
    res.render("success.ejs")
})

app.get("/users",(req,res)=>{
    res.json({
        users
    })
})

app.post("/add-user",async(req,res)=>{
    await user.create(
        formData
    )
    res.send("User created");
})

app.post("/contact", async (req,res)=>{
    const {username, password} = req.body;
    await user.create({username, password});
    res.redirect("/success");
})

app.listen(5000, ()=>{
    console.log("Server is listening at 5000");
});
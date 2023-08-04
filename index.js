const http = require("http");


const server  = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>This is the home page</h1>")
    }else if(req.url=="about"){
        res.end("<h1>This is the about page of the application</h1>")
    }else if(req.url=="/contactus"){
        res.end("<h1>This is the contact us page of the application</h1>")
    }else{
        res.end("<h1>404: Page not found</h1>")
    }
});

server.listen(1000, ()=>{
    console.log("Server is listening");
})
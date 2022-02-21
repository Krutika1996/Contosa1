var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Krutika Rangari");
};
var onDefault=function(req, res){
    res.send("<h1>Contosa</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Multinational company </li>"+
                    " <li>Uses Platform as Service</li>"+
                    " <li>It has a cloud subscription to use </li>"+
                    " <li>it as Infrastructure as service</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");

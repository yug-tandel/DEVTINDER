const express = require("express");  //This imports the Express.js library into your file so you can use it.

const app = express(); // This creates a single instance of an Express application that defines your server and its behavior.

app.get("/user", 
    (req, res, next) =>{
        console.log("user 1");
        next()

    },
    (req, res, next) =>{
        console.log("user 2");
        next()
        console.log("2")
        res.send("Request Handler Route 2")
    },
    (req, res, next) =>{
        console.log("user 3");
        res.send("Request Handler Route 3")
        next()
    },
    (req, res,) =>{
        console.log("user 4");
        // res.send("Request handle Route 4")
    }
);

//  //This starts the server, telling it to listen for incoming connections on port 3000

app.listen(3000, () => {
    console.log("server is successfully listening on port 3000");
});
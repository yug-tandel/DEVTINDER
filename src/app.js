const express = require("express");  //This imports the Express.js library into your file so you can use it.

const app = express(); // This creates a single instance of an Express application that defines your server and its behavior.

app.use("/", (req, res) =>{
    res.send("Handling / Route");
})

app.get("/user", (req, res, next) =>{
    console.log("/ User")
    res.send("2nd Route Handler");
})









//  //This starts the server, telling it to listen for incoming connections on port 3000

app.listen(3000, () => {
    console.log("server is successfully listening on port 3000");
});




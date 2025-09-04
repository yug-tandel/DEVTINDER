const express = require("express");  //This imports the Express.js library into your file so you can use it.

const app = express(); // This creates a single instance of an Express application that defines your server and its behavior.
const { adminAuth } = require("./middlewares/auth")

app.use("/admin", adminAuth ); 

app.get("/user", (req, res, next) =>{
    res.send("User data Sent")
})

app.get("/admin/getAllData", (req, res, next) =>{
     res.send("All Data Sent");
})

app.get("/admin/deleteUser", (req, res, next) =>{
    res.send("Deleted a user");
})









//  //This starts the server, telling it to listen for incoming connections on port 3000

app.listen(3000, () => {
    console.log("server is successfully listening on port 3000");
});




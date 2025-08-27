const express = require("express");  //This imports the Express.js library into your file so you can use it.

const app = express(); // This creates a single instance of an Express application that defines your server and its behavior.

// query parameter
app.get("/user", (req, res) =>{
    const query = req.query;
    res.send((query));
})


// Dynamic Route
app.get("/product/:id/:name/:price", (req, res) =>{
    const productObj = req.params;
    res.send(productObj)
})


// Rejex
// Any route that has 'a' inside it will work, eg-> /carbon
app.get(/a/, (req, res) =>{
    res.send("Rejex");
})


// Rejex 2
// Anything in the start and ends with specified word will work eg-> butterfly
app.get(/.*fly$/, (req, res) =>{
    res.send("Rejex 2 get Request");
})
















//  //This starts the server, telling it to listen for incoming connections on port 3000

app.listen(3000, () => {
    console.log("server is successfully listening on port 3000");
});
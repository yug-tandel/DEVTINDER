const express = require("express");  
const connectDB = require("./config/database")
const app = express(); 
const User = require('./models/user');

app.use(express.json())

app.post("/signup", async (req, res) =>{
    //Creating a new instance of the User model
    const user = new User(req.body)

    try{

        await user.save();
        res.send("User Added successfully!");
    } catch(err) {
        res.status(400).send("error saving the user", err.message);
    }
});





connectDB().then(() =>{
    console.log("Database connection established...");
    app.listen(3000, () => {
    console.log("server is successfully listening on port 3000");
});
}).catch((err)=>{
    console.log("Database cannot be connected!!")
})









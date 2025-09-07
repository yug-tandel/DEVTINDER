const express = require("express");  
const app = express(); 
const connectDB = require("./config/database")
const User = require('./models/user');

app.use(express.json())

// POSTING DATA
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

// Get user by email
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;

    try {

        const users = await User.find({emailId: userEmail})
        if(users.length === 0){
            res.send("NO Data found")
        } else {
            res.send(users);
        }
        
    } catch(err) {
        res.status(400).send("Something went wrong");
    }
})

//Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) =>{

    try{
        const allUsers = await User.find({})
        res.send(allUsers);
    } catch (err){
        res.status(400).send("Something went wrong", err.message);
    }

})





connectDB().then(() =>{
    console.log("Database connection established...");
    app.listen(3000, () => {
    console.log("server is successfully listening on port 3000");
});
}).catch((err)=>{
    console.log("Database cannot be connected!!")
})









const express = require("express"); //This imports the Express.js library into your file so you can use it.

const app = express(); // This creates a single instance of an Express application that defines your server and its behavior.

//This starts the server, telling it to listen for incoming connections on port 3000
app.listen(3000, () => {
    console.log("server is successfully listening on port 3000");
});




// Difference between Router Handler and Middleware

//#Route Handler - In Node.js, particularly within frameworks like Express.js, a route handler is a function or a series of functions that are executed when a server receives a request for a specific URL path and HTTP method (e.g., GET, POST, PUT, DELETE). 


//#Middleware - Middleware in Node.js refers to functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. These functions are executed sequentially and can perform various operations before the request reaches its final handler or before the response is sent back to the client. 



Response Handler -- In Node.js, a "response handler" refers to the part of your code responsible for constructing and sending the HTTP response back to the client after a request has been processed. This is a crucial component of any web application, as it dictates what information and status are returned to the user or requesting system.


next() -- In Node.js, specifically within frameworks like Express.js, next() is a crucial function used in middleware. It acts as a callback that, when invoked, passes control to the next middleware function in the application's request-response cycle.
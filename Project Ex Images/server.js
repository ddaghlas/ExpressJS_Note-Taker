// DEPENDENCIES
// Express npm package that will be used to give this server useful functionality
const express = require('express');
// import express from "express"; ES6 version

// EXPRESS CONFIGURATION
// sets up the basic properties for our express server

// creating an "express" server in node
const app = express();

// Sets an initial port
const PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to serve static assets directly
app.use(express.static('public'));

// ROUTER
// Series of route files
    // gives the server a "map" of how to respond when users visit or request data from various URLs

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
//"starts" the server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  
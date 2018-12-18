// Dependencies
const express = require('express');
const mongoClient = require('mongodb').mongoClient;
const bodyParser = require('body-parser');

const app = express(); // app instance of express.

// using body parse to permit enconded form in the url.
app.use(bodyParser.urlencoded({ extended: true }))

// Import the routes into our server
require('./app/routes')(app, {});

// app have the instance of the express - app have all the methods of the express.
const port = 8000;
app.listen(port, () => {
  console.log('we are on ' + port + ' !!!!!');
});

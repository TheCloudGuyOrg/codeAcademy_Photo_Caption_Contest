'use strict';


//Use Express
const express = require('express');
const app = express();

//Validate Connection
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//photosRouter
const photosRouter = require("./api/photos-api.js");
app.use("/route/photos", photosRouter);

//Define Port
const PORT = process.env.PORT || 3000;

//Start App 
app.listen(PORT, () => {
  console.log('Your server is listening on port %d (http://localhost:%d)', PORT, PORT); 
});




/* USE SWAGGER FOR CONNECTION INSTEAD

//Import Modules
var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = 3000;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();
console.log(options)

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

*/



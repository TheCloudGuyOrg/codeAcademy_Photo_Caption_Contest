'use strict';

//Import Modules
const path = require('path');
const http = require('http');
const oas3Tools = require('oas3-tools');

//Use Express
const express = require('express');
const app = express();

//photosRouter
const photosRouter = require("./controllers/Routesphotos.js");
app.use("/route/photos", photosRouter);

//captionsRouter
const captionsRouter = require("./controllers/Routescaptions.js");
app.use("/route/captions", captionsRouter);

//usersRouter
const usersRouter = require("./controllers/Routesusers.js");
app.use("/route/users", usersRouter);

//swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const swaggerApp = expressAppConfig.getApp();

//Define Port
const serverPort = process.env.PORT || 3000;
const swaggerPort = 3001;

// Initialize Server
app.listen(serverPort, () => {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort); 
  });

http.createServer(swaggerApp).listen(swaggerPort, function () {
    console.log('Swagger-ui is available on (http://localhost:%d/docs)', swaggerPort);
});






'use strict';
//Import Varables
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const SESSION_SECRET = process.env.SESSION_SECRET

//Use Express
const express = require('express');
const app = express();

//Defining User Sessions 
const session = require('express-session')

const storeSession = new session.MemoryStore() //Dev Only Move to DB for Prod Sessions

app.use(
    session({
        secret: SESSION_SECRET, 
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, //24 Hour Cookie Expiration
            secure: true,
            sameSite: "none"
        },
        resave: false,
        saveUninitialized: false,
        storeSession
    })
)

//Use Passport
const passport = require("passport");
require("./auth/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    const user = req.user || "Guest";
    res.render("home", { user });
});

//authRouter
const authRouter = require("./controllers/Routesauth.js");
app.use("/", authRouter);

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
const path = require('path');
const http = require('http');
const oas3Tools = require('oas3-tools');

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

//Export App
module.exports = app;
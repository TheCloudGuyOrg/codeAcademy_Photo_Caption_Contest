'use strict';
//Import Varables
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const SESSION_SECRET = process.env.SESSION_SECRET;

//Use Express
const express = require('express');
const app = express();

//Use Helmet
const helmet = require('helmet');
app.use(helmet());

//Import DB Helpers
const {  getUserByName, getUserById} = require('./database/helperQueries');

//Setting up Views
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

//Defining User Sessions 
const session = require('express-session');
const storeSession = new session.MemoryStore(); //Dev Only Move to DB for Prod Sessions

app.use(
	session({
		secret: SESSION_SECRET, 
		cookie: {
			maxAge: 1000 * 60 * 60 * 24, 
			secure: false,
			sameSite: 'none'
		},
		resave: false,
		saveUninitialized: false,
		storeSession
	})
);

//Ensure Autnentication Function
const ensureAuthentication = (request, response, next) => {
	if (request.session.authenticated) {
		return next();
	} else {
		response.status(403).json({ msg: 'You\'re not authorized to view this page' });
	}
};

//Use Passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
	return done(null, {
		id: user[0].dataValues.id,
		username: user[0].dataValues.name
	});
}); 

passport.deserializeUser((user, done) => {
	getUserById(user.id)
		.then((response, error) => {
			const username = response[0].dataValues.name;
			if (error) {
				return done(error);
			}
			return done(null, username);
		});
}); 
  
passport.use(new LocalStrategy(
	function (username, password, done) {
		getUserByName(username)
			.then((user) => {
    
				if(user[0] == null) {
					return done(null, false);
				}
    
				const foundMatch = bcrypt.compare(password,user[0].dataValues.password);
    
				foundMatch.then((match) => {
					if(match == false) {
						return done(null, false);
					} 
  
					return done(null, user);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	})
);

//Service Routers
const authRouter = require('./controllers/Routesauth.js');
app.use('/', authRouter);

const photosRouter = require('./controllers/Routesphotos.js');
app.use('/route/photos', ensureAuthentication, photosRouter);

const captionsRouter = require('./controllers/Routescaptions.js');
app.use('/route/captions', ensureAuthentication, captionsRouter);

const usersRouter = require('./controllers/Routesusers.js');
app.use('/route/users', ensureAuthentication, usersRouter);

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
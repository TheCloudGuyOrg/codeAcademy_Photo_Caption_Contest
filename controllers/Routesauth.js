'use strict';

//Use Express
const express = require('express');
const authApi = express.Router();
const passport = require('passport');

//Authenication Routes
authApi.post('/register', async (request, response) => {
	const username = request.body.username;
	const password  = request.body.password;

	const url = `http://localhost:3000/route/users/?name=${username}&email=${username}@testdomain.com&password=${password}`;
    
	try {
		const user = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
		});

		if(user.status === 500) {
			console.log('User already exists!');
			return response.redirect('/');
		}
		response.redirect('/'); 
	}
	catch (error) {
		response.status(500).json({ 
			message: error.message 
		});
	}
});

authApi.post('/login',
	passport.authenticate('local', { failureRedirect : '/error'}),
	(request, response) => {
		request.session.authenticated = true;
		response.redirect('/profile');
	}
);

authApi.get('/', (request, response) => {
	response.render('home');
});

authApi.get('/register', (request, response) => {
	response.render('register');
});

authApi.get('/login', (request, response) => {
	response.render('login');
});

authApi.get('/error', (request, response) => {
	response.render('error');
});

authApi.get('/profile', (request, response) => {
	response.render('profile', { user: request.user }); 
}); 

//fix logout
authApi.get('/logout', (request, response, next) => {
	request.logout(function(error) {
		if (error){
			return next(error);
		}
	});
	response.redirect('/login');
});


//Export API
module.exports = authApi;
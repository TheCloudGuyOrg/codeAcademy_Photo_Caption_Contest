'use strict';

//Use Express
const express = require("express");
const authApi = express.Router();
const passport = require("passport");

//Authenication Routes
authApi.post("/register", async (request, response) => {
    const username = request.body.username
    const password  = request.body.password

    const url = `http://localhost:3000/route/users/?name=${username}&email=${username}@testdomain.com&password=${password}`
    
    try {
      const user = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
          })

        if(user.status === 500) {
          console.log(`User already exists!`)
          return response.redirect('/')
        }
        response.redirect("/"); 
    }
    catch (error) {
      response.status(500).json({ 
          message: error.message 
      });
  }
})

authApi.post("/login",
  passport.authenticate("local", { failureRedirect : "/error"}),
  (request, response) => {
    response.redirect("/");
  }
);

authApi.get("/", (request, response) => {
    response.render("home");
});

authApi.get("/register", (request, response) => {
    response.render("register");
  });

authApi.get("/login", (request, response) => {
    response.render("login");
  });

  authApi.get("/error", (request, responses) => {
    response.render("error");
});

//fix profile
authApi.get("/profile", (request, response) => {
    console.log(request)
    response.render("profile", {  }); //user: request.user
    response.render("profile")
  }); 

  //fix logout
authApi.get("/logout", (request, response) => {
    request.logout();
    response.redirect("/login");
  });


//Export API
module.exports = authApi
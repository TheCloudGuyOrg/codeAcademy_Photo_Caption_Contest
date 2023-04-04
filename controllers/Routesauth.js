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

authApi.get("/", (req, res) => {
    res.render("home");
});

authApi.get("/register", (req, res) => {
    res.render("register");
  });

authApi.get("/login", (req, res) => {
    res.render("login");
  });

  authApi.get("/error", (req, res) => {
    res.render("error");
});

authApi.get("/profile", (req, res) => {
    res.render("profile", { user: req.user });
    res.render("profile")
  }); 

authApi.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });


//Export API
module.exports = authApi
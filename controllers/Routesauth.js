'use strict';

//Use Express
const express = require("express");
const authApi = express.Router();
const passport = require("passport");


//Authenication Routes
authApi.post("/register", async (req, res) => {
    const username = req.body.username
    const password  = req.body.password

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
          return res.redirect('register')
        }
        res.redirect("register"); 
    }
    catch (err) {
      res.status(500).json({ 
          message: err.message 
      });
  }
})

authApi.post("/login",
  passport.authenticate("local", { failureRedirect : "/login"}),
  (req, res) => {
    res.redirect("profile");
  }
);

authApi.get("/register", (req, res) => {
    res.render("register");
  });

authApi.get("/login", (req, res) => {
    res.render("login");
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
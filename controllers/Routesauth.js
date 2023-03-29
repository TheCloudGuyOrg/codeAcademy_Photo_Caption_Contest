'use strict';

//Use Express
const express = require("express");
const authApi = express.Router();
const passport = require("passport");

//Import Queries
const { getUsersById } = require('../service/RoutesusersService.js');

//Authenication Routes
authApi.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const id = parseInt(request.params.id)

    try {
        const user = await getUsersById(id) //FIX DB CALL

        if(user) {
            console.log(`User ${user} already exists!`)
            return res.redirect('login')
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            name: req.query.name,
            email: req.query.email,
            password: hashedPassword
        }

        await users.push(newUser); //ADD NEW USER TO DB
        res.redirect("login");
    }
    catch (err) {
        res.status(500).json({ 
            message: err.message 
        });
    }
  })

authApi.get("/register", (req, res) => {
    res.render("register");
  });

authApi.post("/login",
  passport.authenticate("local", { failureRedirect : "/login"}),
  (req, res) => {
    res.redirect("profile");
  }
);

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
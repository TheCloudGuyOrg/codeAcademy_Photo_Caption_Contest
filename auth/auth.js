//Use Express
const express = require("express");
const authApi = express.Router();


//Defining User Sessions
const { SESSION_SECRET } = require('../var.js')
const session = require('express-session')
const store = new session.MemoryStore() //Dev Only Move to DB for Prod Sessions
authApi.use(
    session({
        secret: SESSION_SECRET, 
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, //24 Hour Cookie Expiration
            secure: true,
            sameSite: "none"
        },
        resave: false,
        saveUninitialized: false,
        store
    })
)

//Authentication - Move to Seperate File
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

authApi.use(passport.initialize());
authApi.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
  }); 

passport.deserializeUser((id, done) => {
    db.users.findById(id, function (err, user) {
      if (err) return done(err); 
      done(null, user);
    });
  });  

passport.use(new LocalStrategy(
    function (username, password, done) {
      db.users.findByUsername(username, (err, user) => {
        if(err) {
            return done(err)
        }
        if(!user) {
            return done(null, false)
        };
        if(user.password != password) {
            return done(null, false)
        }
        return done(null, user)
      });
    })
  );

function ensureAuthentication(request, response, next) {
    if (request.session.authenticated) {
      return next();
    } else {
      response.status(403).json({ msg: "You're not authorized to view this page" });
    }
  }

authApi.get("/login", (req, res) => {
    res.render("login");
  });

authApi.get("/profile", (req, res) => {
    res.render("profile", { user: req.user });
    res.render("profile")
  }); 

authApi.post("/login",
  passport.authenticate("local", { failureRedirect : "/login"}),
  (req, res) => {
    res.redirect("profile");
  }
);

authApi.post("/login", (req, res) => {
    const { username, password } = req.body;
    db.users.findByUsername(username, (err, user) => {
      if (!user) return res.status(403).json({ msg: "No user found!" });
      if (user.password === password) {
        req.session.authenticated = true;
        req.session.user = {
          username,
          password,
        };
        res.redirect("/shop");
      } else {
        res.status(403).json({ msg: "Bad Credentials" });
      }
    });
  });

authApi.get("/register", (req, res) => {
    res.render("register");
  });

authApi.post("/register", async (req, res) => {
    const { username, password } = req.body;
    // imported helper function: 
    // db.users.addUser
    const newUser = await db.users.createUser({ username, password })
    if (newUser) {
        res.status(201).json({
          msg: `User ${username} has been created`,
          newUser
        })
    } 
    else {
        res.status(500).json({ msg: "Failed to create user" });
    }
  })

authApi.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

module.exports = ensureAuthentication

  /* SAMPLE
// Add your ensureAuthentication middleware below:
const { ensureAuthentication } = requires(../auth/auth.js)

app.get("/shop", ensureAuthentication, (req, res) => {
  // Send the user object to the view page:
  res.render("shop", { user: req.session.passport.user });
});
*/
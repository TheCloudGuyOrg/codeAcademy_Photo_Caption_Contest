//Use Express
const express = require("express");
const authApi = express.Router();

//Import Queries
const {
    getUsersById
} = require('../service/RoutesusersService.js');


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

// Validate bcrypt hash
const bcrypt = require("bcrypt");
const comparePasswords = async (password, hash) => {
    try {
      const matchFound = await bcrypt.compare(password, hash);
      return matchFound;
    } catch (err) {
      console.log(err);
    }
      return false;
  };

// Validate Authenticated Function
function ensureAuthentication(request, response, next) {
    if (request.session.authenticated) {
      return next();
    } else {
      response.status(403).json({ msg: "You're not authorized to view this page" });
    }
  }
  

//Configure Passport Authentication 
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

//Configuring Authentication Routes
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

authApi.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const id = parseInt(request.params.id)

    try {
        const user = await getUsersById(id)

        if (!user) {
            console.log("User does not exist!");
            return res.redirect("login");
          }

        const matchedPassword = await bcrypt.compare(password, user.password);

        if (!matchedPassword) {
            console.log("Passwords did not match!");
            return res.redirect("login");
        }

    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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


authApi.get("/register", (req, res) => {
    res.render("register");
  });

authApi.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const id = parseInt(request.params.id)

    try {
        const user = await getUsersById(id)

        if(user) {
            console.log(`User ${user} already exists!`)
            return res.redirect('login')
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            name: req.query.name,
            email: req.query.email,
            password: hash
        }
        await users.push(newUser);
        res.redirect("login");
    }
    catch (err) {
        res.status(500).json({ message: err.message });
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
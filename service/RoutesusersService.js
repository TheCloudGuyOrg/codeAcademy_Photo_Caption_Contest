'use strict';
//Import DB Modules
const models = require('../database/models');
const User = models.user

//Import Cache
const CacheService = require('../database/cache/node-cache.js')
const ttl = 60 * 60 * 1 //cache for 1 Hour
const cache = new CacheService(ttl)
const cache_key = 'users'

//Authorization
/* SAMPLE
const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const PORT = process.env.PORT || 4001;

app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: true, sameSite: "none" },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

function ensureAuthentication(req, res, next) {
  // Complete the if statement below:
  if (req.session.authenticated) {
    return next();
  } else {
    res.status(403).json({ msg: "You're not authorized to view this page" });
  }
}

// Add your ensureAuthentication middleware below:
app.get("/shop", ensureAuthentication, (req, res) => {
  // Send the user object to the view page:
  res.render("shop", { user: req.session.user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

// POST request for logging in
app.post("/login", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/


//Get Users
exports.getUsers = async (request, response) => {
  return await cache.get(`${cache_key}`, () =>
    User.findAll({
      order: [
          ['createdAt', 'ASC'],
      ]
  }))
  .then((users) => { 
    response.status(200).send({
      status: 'Success',
      message: 'User Information retrieved',
      data: users,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Get Users by Id
exports.getUsersById = async (request, response) => {
  const id = parseInt(request.params.id)

  return await cache.get(`${cache_key}_${id}`, () =>
    User.findAll({
      where: {id: id},
      order: [
        ['id', 'ASC'],
      ]
  }))
  .then((users) => { 
    if (!users) {
      response.status(404).send({
        message: 'User Not Found',
      })
    }
    response.status(200).send({
      status: 'Success',
      message: 'User Information retrieved',
      data: users,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Add Users
exports.addUser = async (request, response) => {
  return await User.create({
    name: request.query.name,
    email: request.query.email,
    password: request.query.password
  })
  .then((users) => { 
    response.status(201).send({
      status: 'Success',
      message: 'New User Created',
      data: users
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Update Users
exports.updateUsers = async (request, response) => {
  const id = parseInt(request.params.id)

  return await User.update({
    name: request.query.name,
    email: request.query.url,
    password: request.query.citation
  },{
    where: {id: id}
  })
  .then((users) => { 
    response.status(200).send({
      status: 'Success',
      message: `User with ID ${id} updated`,
      data: users
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}

//Delete Users
exports.deleteUsers = async (request, response) => {
  const id = parseInt(request.params.id)
  
  return await User.destroy({
    where: {id: id}
  })
  .then((users) => { 
    if (users) {
      response.status(200).send({
        status: 'Success',
        message: `User with ID ${id} deleted`,
        data: users
      })
    } 
    else {
      response.status(404).send({
        status: 'Failure',
        message: 'User Not Found'
      })
    }
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Add Login
exports.addLogin = async (request, response) => {

}
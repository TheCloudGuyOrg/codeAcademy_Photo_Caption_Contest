//Passport Config
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

//Import DB Modules
const models = require('../database/models');
const User = models.user

//Get Users by Name
const getUserByName = async (username) => {
  return await User.findAll({
    where: {name: username},
  })
}


passport.use(new LocalStrategy(
  function (username, password, done) {
    getUserByName(username)
      .then((user) => {
  
        if(user[0] == null) {
          return done(null, false)
        };
  
        const foundMatch = bcrypt.compare(password,user[0].dataValues.password);
  
        foundMatch.then((match) => {
          if(match == false) {
            return done(null, false)
          } 

          return done(null, user)
        })
      })
      .catch((error) => {
        console.log(error)
      })
    })
)

passport.serializeUser((id, done) => {
  done(null, id);
}); 

passport.deserializeUser((id, done) => {
  getUsersById(id, function (error, user) {
    if (err) return done(error); 
      done(null, user);
  });
}); 





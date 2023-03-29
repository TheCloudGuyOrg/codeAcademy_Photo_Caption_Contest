

//Passport Config
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const { getUsersById } = require('../service/RoutesusersService.js');


passport.use(new LocalStrategy(
    function (username, password, done) {
      getUsersById(username, async (error, user) => { 
        if(error) {
            return done(err)
        }
        if(!user) {
            return done(null, false)
        };

        const foundMatch = await bcrypt.compare(password,user.password);

        if(!foundMatch) {
            return done(null, false)
        }
        return done(null, user)
      });
    })
  );

  passport.serializeUser((id, done) => {
    done(null, id);
  }); 

passport.deserializeUser((id, done) => {
    getUsersById(id, function (error, user) {
      if (err) return done(error); 
      done(null, user);
    });
  }); 





const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log('strat hit');
    return done(null, 'user');
  })
);

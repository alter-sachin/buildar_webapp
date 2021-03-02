const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(user, done) {
		done(null, true);
	});

passport.deserializeUser(function(user, done) {
		done(null, user.userId);
	});

passport.use(new GoogleStrategy({
	clientID: "976971922840-p9eobg6v863nppicf7vsatfup1q82qjt.apps.googleusercontent.com",
	clientSecret: "-Xwi9od0l9INQAa2y3ClbQGK",
	callbackURL: "http://localhost:3000/api/v1.0/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
	// Register user here;
	console.log(profile);
	cb(null,profile);
	// // cb(err, profilel)
	// let workspaceNumber = Math.floor((Math.random() * 10000) + 1);
	// let workspaceName = profile.name.givenName;

}));




//google returns a client id etc......
//we need to make a workspace url , lets make a makeshift url 
// we need register a new user if it is new user....
//then he logs in using the normal token based login method, local strategy.....

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
// const passport = require('passport');
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const variables = require('./services/variables');
// const users = require('./api/v1/users/usersController');

/************************************************
 * START IMPORT ENDPOINTS
 */
const apiRouter = require('./router');
/*
 * END IMPORT ENDPOINTS
 */

/************************************************
 * START APP CONFIG
 */
const app = express();

app.use(helmet());

app.use(bodyParser.json())

// app.use(passport.initialize());

// passport.use(new JwtStrategy(
//   {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
//     secretOrKey: variables.get('JWT_SECRET')
//   },
//   (jwt, done) => {
//     users.getUser(jwt.id)
//     .then((user) => {
//       done(null, user[0].u.properties);
//     })
//     .catch((err) => { done(err); })
//   }
// ));

app.use('/static', express.static('assets'));

app.use('/api', apiRouter);
/*
 * END APP CONFIG
 */

/************************************************
 * APP EXPORT
 */
module.exports = app;

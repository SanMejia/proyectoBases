const express = require('express');
const session = require('express-session');
require ('dotenv').config();
//const passport = require('passport');

const app = express();
const { passport } = require('./config/passport');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use((req,res,next) => {
   res.locals.user = req.user || null;
   next();
});
//rutas
app.use(require('./routes/index'));


app.listen(3000);

console.log('Server on port 3000');

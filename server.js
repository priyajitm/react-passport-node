const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Connect Database
const connectDB = require('./config/db');
connectDB();

// Connect Passport
require('./config/passportConfig')(passport);

// Middleware
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(session({ secret: 'secret key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/register', require('./routes/registration'));
app.use('/dashboard', require('./routes/dashboard'));

// Start Server
app.listen(5000, () => {
  console.log('Server Started on port 5000');
});

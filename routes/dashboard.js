const express = require('express');
const router = express.Router();
const jwtdecode = require('jwt-decode');
const User = require('../models/User');
const isAuthenticated = require('../config/checkAuth');

router.get('/', isAuthenticated, async (req, res) => {
  try {
    res.json({ name: req.user.name, email: req.user.email, registeredOn: req.user.registeredOn });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;

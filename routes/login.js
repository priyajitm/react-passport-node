const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(401).send('Invalid credentials');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).json({
          name: req.user.name,
          email: req.user.email,
          registeredOn: req.user.registeredOn,
        });
      });
    }
  })(req, res, next);
});

module.exports = router;

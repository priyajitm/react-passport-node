const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      res.status(200).send({ mgs: 'user exists' });
    } else {
      const encryptedPassword = await bcrypt.hash(password, 10);
      const userData = new User({ name: name, email: email, password: encryptedPassword });

      await userData.save();
      res.status(201).send('user created');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('DB Error');
  }
});

module.exports = router;

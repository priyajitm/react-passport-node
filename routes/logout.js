const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  req.logOut();
  res.status(200).send('logged out');
});

module.exports = router;

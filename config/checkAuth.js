const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.status(401).send('not authenticated');
  }
};

module.exports = isAuthenticated;

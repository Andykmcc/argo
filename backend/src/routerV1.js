const express = require('express');
const user = require('./user');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({status: 'OK'});
});

router.use('/user', user);

module.exports = router;

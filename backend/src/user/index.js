const express = require('express');
const User = require('./model');

const router = express.Router();

router.post('/', (req, res) => {
  const {body} = req;

  try {
    const user = new User(body);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

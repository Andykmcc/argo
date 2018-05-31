const express = require('express');
// const v1 = require('./v1');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({status: 'OK'});
});

// router.use('/v1', v1);

module.exports = router;

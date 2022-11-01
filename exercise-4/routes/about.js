const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('<h1>about page</h1>');
});

router.get('/me', (req, res) => {
  res.send({
    "name": 'John Doe',
  });
});

module.exports = router;

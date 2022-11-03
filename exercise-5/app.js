const express = require('express');
const app = express();
const port = process.env.port || 4000;

const indexPage = require('./routes/index.js');

app.use('/', indexPage);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

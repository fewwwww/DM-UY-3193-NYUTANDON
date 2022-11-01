const express = require('express');
const app = express();
const port = 4000;

const homePage = require('./routes/index.js');
const aboutPage = require('./routes/about.js');

app.use('/', homePage);
app.use('/about', aboutPage);

app.use('/images', express.static('public'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

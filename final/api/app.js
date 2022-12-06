const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const firebase = require('firebase/app');
const firebaseConfig = {
  apiKey: "AIzaSyAsc41donWEV2yMWXDkbUiWluuOZNkKAtw",
  authDomain: "final-2a68a.firebaseapp.com",
  projectId: "final-2a68a",
  storageBucket: "final-2a68a.appspot.com",
  messagingSenderId: "502670223238",
  appId: "1:502670223238:web:8754b0d7abdb078aca2e07"
};
firebase.initializeApp(firebaseConfig);

const indexPage = require('./routes/index.js');
const tweetPage = require('./routes/tweet.js');
const ownPage = require('./routes/own.js');

app.use('/', indexPage);
app.use('/tweet', tweetPage);
app.use('/own', ownPage);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

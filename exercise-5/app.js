const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const firebase = require('firebase/app');
const firebaseConfig = {
  apiKey: 'AIzaSyD71jkm1fDTYBGFYJepeK8waXn6CuusFSc',
  authDomain: 'exercise-5-18fbd.firebaseapp.com',
  projectId: 'exercise-5-18fbd',
  storageBucket: 'exercise-5-18fbd.appspot.com',
  messagingSenderId: '699178366232',
  appId: '1:699178366232:web:ff5de631a50f1a27689a6d',
};
firebase.initializeApp(firebaseConfig);

const indexPage = require('./routes/index.js');
const singlePostPage = require('./routes/singlePost.js');
const createPostPage = require('./routes/createPost.js');

app.use('/', indexPage);
app.use('/post', singlePostPage);
app.use('/create', createPostPage);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

const express = require('express');
const router = express.Router();
const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  const queryParams = req.query;
  const text = queryParams.postText;
  const author = queryParams.postAuthor;
  const id = text.replace(/[!@#$%^&* ',.]/g, '-').toLowerCase();

  const tweetPost = firestore.setDoc(
    firestore.doc(db, 'posts', id),
    {
      text: text,
      author: author,
      time: Date.now(),
      owner: author
    },
  );

  tweetPost
    .then((response) => {
      return res.redirect('http://https://famous-vacherin-72b30d.netlify.app/');
    })
    .catch((error) => {
      console.log(error);
      return res.send(error);
    });
});

module.exports = router;

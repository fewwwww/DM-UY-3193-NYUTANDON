const express = require('express');
const router = express.Router();
const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  const postsQuery = firestore.getDocs(firestore.collection(db, 'posts'));
  const postsArray = [];
  postsQuery
    .then((response) => {
      response.forEach((post) => {
        postsArray.push({ id: post.id, ...post.data() });
      });
      return res.send(postsArray);
    })
    .catch((error) => {
      console.log(error);
      return res.send(error);
    });
});

module.exports = router;

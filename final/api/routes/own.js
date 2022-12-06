const express = require('express');
const router = express.Router();
const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/:id', (req, res) => {
  const queryParams = req.query;
  const owner = queryParams.owner;
  const updateOwner = firestore.updateDoc(
    firestore.doc(db, 'posts', idFromTitle),
    {
      owner: owner,
    },
  );

  updateOwner
    .then((response) => {
      return res.send(`
    <h1>Submission Successful!</h1>
  `);
    })
    .catch((error) => {
      console.log(error);
      return res.send(error);
    });
});

module.exports = router;

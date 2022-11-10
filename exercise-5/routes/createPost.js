const express = require('express');
const router = express.Router();
const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

const createPostForm = `
<h1>Create Post</h1>
<form action="/create/submit">
  <div style="display: flex; flex-direction: column; max-width: 400px;">
    <label for="postTitle">Title</label>
    <input type="text" name="postTitle" placeholder="Title"/>
    <label for="postText">Text</label>
    <input type="text" name="postText" placeholder="Text"/>
    <label for="postAuthor">Author</label>
    <input type="text" name="postAuthor" placeholder="Author"/>
    <button type="submit">Submit</button>
  </div>
</form>
`;

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send(createPostForm);
});

router.get('/submit', (req, res) => {
  const queryParams = req.query;
  const title = queryParams.postTitle;
  const text = queryParams.postText;
  const author = queryParams.postAuthor;
  const idFromTitle = title.replace(/\s+/g, '-').toLowerCase();

  const setBlogPost = firestore.setDoc(
    firestore.doc(db, 'posts', idFromTitle),
    {
      title: title,
      text: text,
      author: author,
    },
  );

  setBlogPost
    .then((response) => {
      return res.send(`
      <h1>Submission Successful!</h1>
      <p><a href="/create">Add Another Post</a></p>
      <p><a href="/">Return Home</a></p>
    `);
    })
    .catch((error) => {
      console.log(error);
      return res.send(error);
    });
});

module.exports = router;

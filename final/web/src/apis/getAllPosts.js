const getAllPosts = async () => {
  const response = await fetch('https://dynamic-webapp-final.onrender.com').catch((err) =>
    console.log(err),
  );
  const posts = await response.json();
  for (let i = 0; i < posts.length; i++) {
    posts[i]['time'] = new Date(posts[i]['time']).toString().substring(4, 15);
  }
  return posts;
};

export default getAllPosts;

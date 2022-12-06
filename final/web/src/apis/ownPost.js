const ownPost = async (id, owner) => {
  const response = await fetch(
    `http://localhost:4000/own?id=${id}&owner=${owner}`,
  ).catch((err) => console.log(err));
  return response;
};

export default ownPost;

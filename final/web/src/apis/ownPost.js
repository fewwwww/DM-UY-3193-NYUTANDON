const ownPost = async (id, owner) => {
  const response = await fetch(
    `https://dynamic-webapp-final.onrender.com/own?id=${id}&owner=${owner}`,
  ).catch((err) => console.log(err));
  return response;
};

export default ownPost;

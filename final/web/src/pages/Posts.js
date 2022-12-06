import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import getAllPosts from '../apis/getAllPosts';

const PostsPage = ({
  isLoading,
  isLoggingIn,
  setIsLoggingIn,
  userInformation,
  setUserInformation,
}) => {

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggingIn) {
      navigate('/login');
    }
  }, [isLoading, isLoggingIn, navigate]);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    getPosts();
  }, []);

  if (!userInformation) {
    return;
  }

  return (
    <div className='page'>
      <Header
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
        userInformation={userInformation}
        setUserInformation={setUserInformation}
      />
      <div className='content'>
        {posts.map((post) => (
          <Post
            key={post.id}
            text={post.text}
            author={post.author.substring(0, 5)}
            owner={post.owner.substring(0, 5)}
            time={post.time}
            like={post.like}
            isOwned={post.owner === userInformation.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

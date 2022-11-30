import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';

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

  return (
    <div className='page'>
      <Header
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
        userInformation={userInformation}
        setUserInformation={setUserInformation}
      />
      <div className='content'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostsPage;

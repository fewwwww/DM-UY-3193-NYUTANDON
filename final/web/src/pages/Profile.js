import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';

const ProfilePage = ({
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
  }, [isLoggingIn, navigate]);

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
      <div className='content profile-content'>
        <h1>{userInformation.email.split('@')[0]}</h1>
        <p>Email: {userInformation.email}</p>
        <p>uid: {userInformation.uid}</p>
        <p className='profile-posts'>posted:</p>
        <Post />
        <Post />
        <Post />
        <p className='profile-posts'>owned:</p>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default ProfilePage;

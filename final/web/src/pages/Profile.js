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
        <div>Email: {userInformation.email}</div>
        <div>uid: {userInformation.uid}</div>
        <div className='profile-posts'>posted:</div>
        <Post />
        <Post />
        <Post />
        <div className='profile-posts'>owned:</div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default ProfilePage;

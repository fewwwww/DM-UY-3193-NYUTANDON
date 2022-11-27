import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';

const ProfilePage = () => {
  return (
    <div className='page'>
      <Header />
      <div className='content profile-content'>
        <h1>Name</h1>
        <div>Email: sy2940@nyu.edu</div>
        <div>uid: abcde</div>
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

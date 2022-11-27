import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';

const PostsPage = () => {
  return (
    <div className='page'>
      <Header />
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

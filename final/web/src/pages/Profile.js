import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import getAllPosts from '../apis/getAllPosts';

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
      <div className='content profile-content'>
        <h1>
          {userInformation.email.split('@')[0]} (
          {userInformation.uid.substring(0, 5)})
        </h1>
        <p>Email: {userInformation.email}</p>
        <p>uid: {userInformation.uid}</p>
        <p className='profile-posts'>posted:</p>
        {posts.map((post) => {
          if (post.author === userInformation.uid) {
            return (
              <Post
                key={post.id}
                text={post.text}
                author={post.author.substring(0, 5)}
                owner={post.owner.substring(0, 5)}
                time={post.time}
                like={post.like}
                isOwned={post.owner === userInformation.uid}
              />
            );
          } else {
            return null;
          }
        })}
        <p className='profile-posts'>owned:</p>
        {posts.map((post) => {
          if (post.owner === userInformation.uid) {
            return (
              <Post
                key={post.id}
                text={post.text}
                author={post.author.substring(0, 5)}
                owner={post.owner.substring(0, 5)}
                time={post.time}
                like={post.like}
                isOwned={post.owner === userInformation.uid}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ProfilePage;

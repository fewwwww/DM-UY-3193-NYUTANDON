import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const UserProfilePage = ({
  isLoggingIn,
  isLoading,
  userInformation,
  setIsLoggingIn,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggingIn) {
      navigate('/login');
    }
  }, [isLoading, isLoggingIn, navigate]);

  return (
    <>
      <Header
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
        userInformation={userInformation}
      />
      <div className='PageWrapper'>
        <h1>User Profile</h1>
        <p>Display Name: {userInformation.name}</p>
        <p>Email: {userInformation.email}</p>
        <p>uid: {userInformation.uid}</p>
      </div>
    </>
  );
};

export default UserProfilePage;

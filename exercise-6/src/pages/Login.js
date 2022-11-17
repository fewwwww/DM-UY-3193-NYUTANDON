import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

const LoginPage = ({ isLoggingIn, setIsLoggingIn, userInformation }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggingIn) navigate('/');
  }, [isLoggingIn, navigate]);

  return (
    <>
      <Header
        setIsLoggingIn={setIsLoggingIn}
        userInformation={userInformation}
      />
      <div className='PageWrapper'>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;

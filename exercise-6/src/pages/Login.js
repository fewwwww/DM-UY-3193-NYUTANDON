import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = ({
  isLoggingIn,
  setIsLoggingIn,
  userInformation,
  setUserInformation,
}) => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState();
  useEffect(() => {
    if (isLoggingIn) navigate('/');
  }, [isLoggingIn, navigate]);

  const loginUser = useCallback(
    (e) => {
      e.preventDefault();
      console.log(e);
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoggingIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ errorCode, errorMessage });
          setErrors(errorMessage);
        });
    },
    [setIsLoggingIn, setUserInformation],
  );

  return (
    <>
      <Header
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
        userInformation={userInformation}
      />
      <div className='PageWrapper'>
        <h1>Login</h1>
        <LoginForm loginUser={loginUser} />
      </div>
      <p>{errors}</p>
    </>
  );
};

export default LoginPage;

import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className='page'>
      <Header
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
        setUserInformation={setUserInformation}
      />
      <div className='content'>
        <h1>Login</h1>
        <form className='UserForm' onSubmit={(e) => loginUser(e)}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <p>{errors}</p>
    </div>
  );
};

export default LoginPage;

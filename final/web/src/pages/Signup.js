import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignupPage = ({
  isLoggingIn,
  setIsLoggingIn,
  setUserInformation,
  userInformation,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggingIn) navigate('/');
  }, [isLoggingIn, navigate]);

  const [errors, setErrors] = useState();
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoggingIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          setErrors();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ errorCode, errorMessage });
          setErrors(errorMessage);
          setIsLoggingIn(false);
          setUserInformation({});
        });
    },
    [setErrors, setIsLoggingIn, setUserInformation],
  );

  return (
    <div className='page'>
      <Header
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
        setUserInformation={setUserInformation}
      />
      <div className='content'>
        <h1>Signup</h1>
        <form
          className='UserForm'
          onSubmit={(e) => {
            signUpUser(e);
          }}
        >
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <button htmlFor='submit'>Submit</button>
        </form>
      </div>
      <p>{errors}</p>
    </div>
  );
};

export default SignupPage;

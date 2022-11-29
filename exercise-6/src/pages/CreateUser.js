import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateUserForm from '../components/CreateUserForm';
import Header from '../components/Header';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const CreateUserPage = ({
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
    <>
      <Header
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
        userInformation={userInformation}
      />
      <div className='PageWrapper'>
        <h1>Create User</h1>
        <CreateUserForm signUpUser={signUpUser} />
        {errors}
      </div>
    </>
  );
};

export default CreateUserPage;

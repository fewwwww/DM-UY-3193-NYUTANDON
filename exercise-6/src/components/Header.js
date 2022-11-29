import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Header = ({ isLoggingIn, setIsLoggingIn, setUserInformation }) => {
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggingIn(false);
        setUserInformation();
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <header>
      <nav>
        {isLoggingIn && (
          <Link to='/'>
            <p>Home</p>
          </Link>
        )}
        {!isLoggingIn && (
          <Link to='/login'>
            <p>Login</p>
          </Link>
        )}
        {!isLoggingIn && (
          <Link to='/create'>
            <p>Create User</p>
          </Link>
        )}{' '}
        {isLoggingIn && (
          <p
            onClick={() => {
              logOut();
            }}
          >
            Log Out
          </p>
        )}
      </nav>
    </header>
  );
};

export default Header;

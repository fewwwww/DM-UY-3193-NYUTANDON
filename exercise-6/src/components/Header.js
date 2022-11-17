import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Header = ({ setIsLoggingIn, setUserInformation }) => {
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
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/login'>
          <p>Login</p>
        </Link>
        <Link to='/create'>
          <p>Create User</p>
        </Link>
        <p
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </p>
      </nav>
    </header>
  );
};

export default Header;

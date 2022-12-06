import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHashtag,
  faHouse,
  faRightToBracket,
  faUserPlus,
  faUser,
  faRightFromBracket,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import Write from './Write';
import { getAuth, signOut } from 'firebase/auth';

const Header = ({
  isLoggingIn,
  setIsLoggingIn,
  userInformation,
  setUserInformation,
}) => {
  const [showWrite, setShowWrite] = useState(false);

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
      {showWrite && (
        <Write setShowWrite={setShowWrite} userInformation={userInformation} />
      )}
      <nav>
        <Link to='/'>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faHashtag} />
            <div className='nav-name'></div>
          </div>
        </Link>
        <Link to='/'>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faHouse} />
            <div className='nav-name'>Home</div>
          </div>
        </Link>
        {!isLoggingIn && (
          <Link to='/login'>
            <div className='nav-item'>
              <FontAwesomeIcon icon={faRightToBracket} />
              <div className='nav-name'>Login</div>
            </div>
          </Link>
        )}
        {!isLoggingIn && (
          <Link to='/signup'>
            <div className='nav-item'>
              <FontAwesomeIcon icon={faUserPlus} />
              <div className='nav-name'>Signup</div>
            </div>
          </Link>
        )}
        {isLoggingIn && (
          <Link to='/profile'>
            <div className='nav-item'>
              <FontAwesomeIcon icon={faUser} />
              <div className='nav-name'>Profile</div>
            </div>
          </Link>
        )}
        {isLoggingIn && (
          <div
            onClick={() => {
              logOut();
            }}
          >
            <div className='nav-item'>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <div className='nav-name'>Logout</div>
            </div>
          </div>
        )}
        {isLoggingIn && (
          <div className='write' onClick={() => setShowWrite(true)}>
            <div className='nav-item'>
              <FontAwesomeIcon icon={faPenToSquare} />
              <div className='nav-name'>Write</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

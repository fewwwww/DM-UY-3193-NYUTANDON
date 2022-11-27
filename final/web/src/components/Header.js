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

const Header = () => {
  const [showWrite, setShowWrite] = useState(false);

  return (
    <header>
      {showWrite && <Write setShowWrite={setShowWrite} />}
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
        <Link to='/login'>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faRightToBracket} />
            <div className='nav-name'>Login</div>
          </div>
        </Link>
        <Link to='/signup'>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faUserPlus} />
            <div className='nav-name'>Signup</div>
          </div>
        </Link>
        <Link to='/profile'>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faUser} />
            <div className='nav-name'>Profile</div>
          </div>
        </Link>
        <div>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <div className='nav-name'>Logout</div>
          </div>
        </div>
        <div className='write' onClick={() => setShowWrite(true)}>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faPenToSquare} />
            <div className='nav-name'>Write</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

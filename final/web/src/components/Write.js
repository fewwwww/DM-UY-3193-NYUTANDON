import React from 'react';
import './Write.css';

const Write = ({ setShowWrite, userInformation }) => {

  return (
    <div className='write-view'>
      <div className='write-container'>
        <form
          className='WriteForm'
          action='http://localhost:4000/tweet'
        >
          <label htmlFor='postText'>Write</label>
          <textarea name='postText' />
          <input
            style={{ display: 'none' }}
            name='postAuthor'
            value={userInformation.uid}
          />
          <div className='button-group'>
            <button
              type='submit'
              className='button-group-submit'
              htmlFor='submit'
            >
              Submit
            </button>
            <button onClick={() => setShowWrite(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;

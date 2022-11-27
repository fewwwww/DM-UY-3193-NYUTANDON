import React from 'react';
import './Write.css';

const Write = ({setShowWrite}) => {
  return (
    <div className='write-view'>
      <div className='write-container'>
        <form className='WriteForm'>
          <label htmlFor='content'>Write</label>
          <textarea name='content' />
          <div className='button-group'>
            <button className="button-group-submit" htmlFor='submit'>Submit</button>
            <button onClick={() => setShowWrite(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;

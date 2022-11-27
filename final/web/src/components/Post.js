import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  return (
    <div className='post'>
      <div className='post-title'>
        <div className='post-title-author'>ABCDE (Author)</div>
        <div className='post-title-owner'>CDNWA (Owner)</div>
        <div className='post-title-date'>Time</div>
      </div>
      <div className='post-content'>Content</div>
      <div className='post-action'>
        <div className='post-action-upvote'>
          <FontAwesomeIcon icon={faHeart} />
          <div>(1)</div>
        </div>
        <div className='post-action-own'>
          <FontAwesomeIcon icon={faBagShopping} />
          <div>(Owner)</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

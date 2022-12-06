import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Post = ({author, owner, text, time, isOwned}) => {

  return (
    <div className='post'>
      <div className='post-title'>
        <div className='post-title-author'>{author} (Author)</div>
        <div className='post-title-owner'>{owner} (Owner)</div>
        <div className='post-title-date'>{time}</div>
      </div>
      <div className='post-content'>{text}</div>
      <div className='post-action'>
        <div className='post-action-own'>
          <FontAwesomeIcon icon={faBagShopping} />
          <div>{isOwned ? '(Owned)' : '(Not Owned)'}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

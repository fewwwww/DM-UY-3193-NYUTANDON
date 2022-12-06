import React, {useState} from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import ownPost from '../apis/ownPost';

const Post = ({ author, owner, text, time, isOwned, id, newOwner }) => {
  const [isOwner, setIsOwner] = useState(isOwned);

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
          <div
            onClick={async () => {
              const res = await ownPost(id, newOwner);
              if (res.status === 200) {
                setIsOwner(true);
              }
            }}
          >
            {isOwner ? '(Owned)' : '(Not Owned)'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

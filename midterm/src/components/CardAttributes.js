import React from 'react';
import './CardAttributes.css';

const CardAttributes = ({ attributes }) => {
  const lastAttributeHolder =
    attributes.length % 2 === 1 ? <div className='attribute'></div> : null;
  return (
    <div className='attributes'>
      {attributes.map((attribute, index) => {
        return (
          <div className='attribute' key={index}>
            <h3>{attribute.trait_type}</h3>
            <p>{attribute.value}</p>
          </div>
        );
      })}
      {lastAttributeHolder}
    </div>
  );
};

export default CardAttributes;

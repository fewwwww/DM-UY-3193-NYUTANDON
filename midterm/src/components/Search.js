import React from 'react';
import './Search.css';

const Search = ({ fetchNFT, updateAddress, randomAddress, updateId, address }) => {
  return (
    <div className='search'>
      <input
        type='text'
        onChange={(event) => updateAddress(event.target.value)}
        value={address}
      />
      <button className='search-button' onClick={() => {updateId(); fetchNFT();}}>Search</button>
      <button className='random-button' onClick={() => randomAddress()}>Random</button>
    </div>
  );
};

export default Search;

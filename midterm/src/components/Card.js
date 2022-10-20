import React from 'react';
import './Card.css';
import CardAttributes from './CardAttributes';

const Card = ({ nft, address, id }) => {
  if (!nft.media && !nft.attributes && !nft.name) {
    return (
      <div
        className='card'
        style={{ minHeight: '50px', backgroundColor: '#f2b1d9' }}
      >
        <h1>Enter NFT contract address. </h1>
        <h1>See random NFT as Card.</h1>
        <img
          src='https://media4.giphy.com/media/HifsMXFLaRsmQlx8jo/giphy.gif'
          alt='https://media4.giphy.com/media/HifsMXFLaRsmQlx8jo/giphy.gif'
        />
      </div>
    );
  }

  if (nft.collectionName === 'BoredApeYachtClub') {
    nft.collectionName = 'BAYC';
  }

  const attributesCount = nft.attributes.length;

  return (
    <div className='card'>
      <div className='card-profile'>
        <img src={nft.media} alt={nft.name} />
        <div className='card-info'>
          <div className='card-name'>
            <h1>{nft.collectionName}</h1>
            <h2>#{id}</h2>
          </div>
          <div className='card-rarity'>
            <p>Rarity: </p>
            <span
              class='fa fa-star'
              style={{ color: attributesCount > 2 ? 'gold' : '#FFF0F0' }}
            ></span>
            <span
              class='fa fa-star'
              style={{ color: attributesCount > 4 ? 'gold' : '#FFF0F0' }}
            ></span>
            <span
              class='fa fa-star'
              style={{ color: attributesCount > 6 ? 'gold' : '#FFF0F0' }}
            ></span>
            <span
              class='fa fa-star'
              style={{ color: attributesCount > 8 ? 'gold' : '#FFF0F0' }}
            ></span>
            <span
              class='fa fa-star'
              style={{ color: attributesCount > 10 ? 'gold' : '#FFF0F0' }}
            ></span>
          </div>
          <div className='card-links'>
            <a href={`https://etherscan.io/address/${address}`}>
              <img
                src='https://etherscan.io/images/brandassets/etherscan-logo-circle.png'
                alt={`https://etherscan.io/address/${address}`}
              />
            </a>
            <a href={nft.url}>
              <img
                src='https://center.dev/_next/image/?url=%2Fimages%2Fcenter-icon-4x.png&w=2048&q=75'
                alt={nft.url}
              />
            </a>
            <a
              href={`https://opensea.io/assets/ethereum/ethereum/${address}/${id}`}
            >
              <img
                src='https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png'
                alt={`https://opensea.io/assets/ethereum/ethereum/${address}/${id}`}
              />
            </a>
          </div>
        </div>
      </div>
      <CardAttributes attributes={nft.attributes} />
    </div>
  );
};

export default Card;

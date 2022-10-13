import './App.css';
import Search from './components/Search';
import Card from './components/Card';
import {useState, useEffect} from 'react';
import { addresses } from './addresses';
import { fetchRender, fetchData } from './utils/api';
import getRandomInt from './utils/random';

function App() {
  const [address, setAddress] = useState('');
  const [id, setId] = useState(0);
  const [nft, setNFT] = useState({});

  // get random nft address
  const randomAddress = () => {
    setAddress(addresses[getRandomInt(3)]);
  }

  // update the nft address state
  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  }

  // get random nft token id
  const randomId = () => {
    return getRandomInt(100);
  }

  // update the nft token id state
  const updateId = () => {
    setId(randomId());
  }

  // fetch all data and render
  async function fetchNFT() {
    const media = await fetchRender(address, id);
    const data = await fetchData(address, id);
    const attributes = await data.metadata.attributes;
    const url = await data.url;
    const name = await data.name;
    const collectionName = await data.collectionName
    console.log(data)
    setNFT({media, attributes, name, url, collectionName});
  }

  useEffect(() => {
    randomAddress()
  }, []);

  useEffect(() => {
    console.log(nft);
  }, [nft]);

  return (
    <div className="App">
      <Search updateAddress={updateAddress} randomAddress={randomAddress} updateId={updateId} address={address} fetchNFT={fetchNFT}/>
      <Card nft={nft} address={address} id={id} />
    </div>
  );
}

export default App;

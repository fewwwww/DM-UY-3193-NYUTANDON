import {key} from '../api-key'

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-Key': key}
};

export const fetchRender = async (address, id) => {
  try {
    const response = await fetch(`https://api.center.dev/v1/ethereum-mainnet/${address}/${id}/medium`, options);
    const responseData = await response.json();
    const responseMediaUrl = await responseData.mediaUrl;
    return responseMediaUrl;
  } catch (err) {
    return console.error(err);
  }
}

export const fetchData = async (address, id) => {
  try {
    const response = await fetch(`https://api.center.dev/v1/ethereum-mainnet/${address}/${id}`, options);
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    return console.error(err);
  }
}

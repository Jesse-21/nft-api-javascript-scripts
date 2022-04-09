// alchemy-nft-api/fetch-script.js
import fetch from 'node-fetch';

// Setup request options:
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Replace with your Alchemy API key:
const apiKey = "cTSytxgRrWftj7pY68_Gx7TDDdAU76TG";
const baseURL = `https://polygon-mainnet.g.alchemy.com/v2/cTSytxgRrWftj7pY68_Gx7TDDdAU76TG/getNFTs/`;
// Replace with the wallet address you want to query:
const ownerAddr = "0xC5633f7E465eBB1A9F855F93047134ef1ca61E49";
const fetchURL = `${baseURL}?owner=${ownerAddr}`;

// Make the request and print the formatted response:
fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

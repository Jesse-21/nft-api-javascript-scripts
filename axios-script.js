// alchemy-nft-api/axios-script.js
import axios from 'axios';

// Replace with your Alchemy API key:
const apiKey = "cTSytxgRrWftj7pY68_Gx7TDDdAU76TG";
const baseURL = `https://polygon-mainnet.g.alchemy.com/v2/cTSytxgRrWftj7pY68_Gx7TDDdAU76TG/getNFTs/`;
// Replace with the wallet address you want to query for NFTs:
const ownerAddr = "0xC5633f7E465eBB1A9F855F93047134ef1ca61E49";

// Construct the axios request:
var config = {
  method: 'get',
  url: `${baseURL}?owner=${ownerAddr}`
};

// Make the request and print the formatted response:
axios(config)
.then(response => console.log(JSON.stringify(response.data, null, 2)))
.catch(error => console.log(error));

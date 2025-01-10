const axios = require('axios');
const Crypto = require('../models/cryptoModel');

const fetchCryptoData = async () => {
    try {
        const response = await axios.get(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true'
        );

        const coins = response.data;
        const entries = [
            {
                coin: 'bitcoin',
                price: coins.bitcoin.usd,
                marketCap: coins.bitcoin.usd_market_cap,
                change24h: coins.bitcoin.usd_24h_change,
            },
            {
                coin: 'ethereum',
                price: coins.ethereum.usd,
                marketCap: coins.ethereum.usd_market_cap,
                change24h: coins.ethereum.usd_24h_change,
            },
            {
                coin: 'matic-network',
                price: coins['matic-network'].usd,
                marketCap: coins['matic-network'].usd_market_cap,
                change24h: coins['matic-network'].usd_24h_change,
            },
        ];

        await Crypto.insertMany(entries);
        console.log('Crypto data fetched and stored.');
    } catch (err) {
        console.error('Error fetching crypto data:', err.message);
    }
};

module.exports = fetchCryptoData;

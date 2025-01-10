const Crypto = require('../models/cryptoModel');
const calculateStdDev = require('../utils/calculateStdDev');

exports.getDeviation = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin is required.' });
    }

    const prices = await Crypto.find({ coin })
        .sort({ fetchedAt: -1 })
        .limit(100)
        .select('price');

    if (prices.length < 2) {
        return res.status(400).json({ error: 'Not enough data to calculate deviation.' });
    }

    const priceValues = prices.map((doc) => doc.price);
    const deviation = calculateStdDev(priceValues);

    res.json({ deviation });
};

const Crypto = require('../models/cryptoModel');

exports.getStats = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin is required.' });
    }

    const latest = await Crypto.findOne({ coin }).sort({ fetchedAt: -1 });
    if (!latest) {
        return res.status(404).json({ error: 'No data found for this coin.' });
    }

    res.json({
        price: latest.price,
        marketCap: latest.marketCap,
        '24hChange': latest.change24h,
    });
};

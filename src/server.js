const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
const cron = require('node-cron');
const fetchCryptoData = require('./jobs/cryptoFetchJob');
// Run the job every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);
require('dotenv').config();
const app = express();
// Database connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Run initial job
fetchCryptoData();

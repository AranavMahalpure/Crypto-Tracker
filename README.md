# Crypto Tracker
A simple Node.js and MongoDB-based server-side application to track cryptocurrency prices, market cap, and 24-hour changes.
---

## Features

1. **Background Job**:
   - Fetches cryptocurrency data (Bitcoin, Ethereum, and Matic) every 2 hours using the CoinGecko API.
   - Stores the data in a MongoDB database.

2. **APIs**:
   - `/stats`: Returns the latest price, market cap, and 24-hour change for a cryptocurrency.
   - `/deviation`: Calculates and returns the standard deviation of the price for the last 100 records of a cryptocurrency.

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<AranavMahalpure>/crypto-tracker.git
   cd crypto-tracker
   npm install

## Environment Variables

Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb+srv://<aranav1289>:<Aranav%40%401289>@cluster0.n5hts.mongodb.net/<database>?retryWrites=true&w=majority


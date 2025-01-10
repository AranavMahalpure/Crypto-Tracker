require('dotenv').config();
const mongoose = require('mongoose');

// Define the connectDB function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            connectTimeoutMS: 30000,
            socketTimeoutMS: 30000,
            useNewUrlParser: true,  
            useUnifiedTopology: true, 
        });
        console.log('MongoDB connected...');
    } catch (err) {

        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// server.js
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection

mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
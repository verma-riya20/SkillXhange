// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';
import requestRoutes from './src/routes/requestRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', routes);
app.use("/api/requests", requestRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

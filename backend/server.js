require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Anime = require('./models/Anime');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection URI with fallback to local MongoDB for development
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/responsiveAnimeDB';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected via Mongoose!'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if cannot connect
  });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/anime', async (req, res) => {
  try {
    const animeList = await Anime.find().sort({ _id: -1 });
    res.json(animeList);
  } catch (err) {
    console.error('Error fetching anime:', err);
    res.status(500).json({ error: 'Failed to fetch anime.' });
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

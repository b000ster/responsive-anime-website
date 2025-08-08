require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Anime = require('./models/Anime');

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/responsiveAnimeDB';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/responsiveAnimeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/api/anime', async (req, res) => {
  try {
    const animeList = await Anime.find().sort({ _id: -1 });
    res.json(animeList);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch anime.' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

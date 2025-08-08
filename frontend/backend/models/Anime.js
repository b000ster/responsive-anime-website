const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genres: [{ type: String }],
  episodes: { type: Number },
  coverImage: { type: String, required: true },
  bannerImage: { type: String },
  description: { type: String },
  section: { type: String },
});

module.exports = mongoose.model('Anime', animeSchema);

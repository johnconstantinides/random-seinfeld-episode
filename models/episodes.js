const mongoose = require('mongoose');
const episodeSchema = new mongoose.Schema({
    title: String,
    description: String,
    season: Number,
    episode: Number,
    date: String,
    episode_cover: String,
    reviews: Number,
    rating: Number
})

const Episode = mongoose.model("episodes2",episodeSchema)
module.exports = Episode
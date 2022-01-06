const mongoose = require('mongoose');
const episodeSchema = new mongoose.Schema({
    title: String,
    description: String,
    season: Number,
    episode: Number,
    date: String,
    episode_cover: String
})

const Episode = mongoose.model("episodes",episodeSchema)
module.exports = Episode
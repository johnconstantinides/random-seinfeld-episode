const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const episodeModel = require('./models/episodes')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`server running on port : ${port}`)
})

//connect to database
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true});

//notifys when connected to database
mongoose.connection.once('open', () => {
    console.log("connected to database")
})

app.get('/',(req,res) => {
    episodeModel.find()
        .then(episode => res.json(episode[Math.floor(Math.random()*episode.length)]))
        .catch(err => res.status(400).json('Error '+ err));
});



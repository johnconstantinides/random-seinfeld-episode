const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const episodeModel = require('./models/episodes')

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


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


app.use(express.static(path.join(__dirname, "/frontend")));
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'/frontend/build','index.html'));
});

app.listen(port, () => {
    console.log(`server running on port : ${port}`)
})




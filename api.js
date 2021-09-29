const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.json');
const cors = require('cors');
const playersProvider = require('./providers/players');
const competitionProvider = require('./providers/competitions');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/competition', competitionProvider.insertCompetition);
app.delete('/competition/:id', competitionProvider.deleteCompetition);
app.get('/competitions', competitionProvider.getCompetitions);

app.post('/players', playersProvider.insertPlayer);
app.get('/players', playersProvider.getPlayers);
app.delete('/player/:id', playersProvider.deletePlayer);
app.put('/player/:id', playersProvider.updateStastics);

mongoose.connect(`mongodb://rafa:rafa1234@ds329668.mlab.com:29668/heroku_nk1dh51w`,
    { useNewUrlParser: true });
app.listen(process.env.PORT || 5000, () => { console.log('Server listening on port 3000') });
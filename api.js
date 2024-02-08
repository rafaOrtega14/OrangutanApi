const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const playersProvider = require('./providers/players');
const competitionProvider = require('./providers/competitions');
const calendarProvider = require('./providers/calendars')

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

app.post('/calendar', calendarProvider.insertGames);

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true });
app.listen(process.env.PORT || 5000, () => { console.log('Server listening on port 5000') });
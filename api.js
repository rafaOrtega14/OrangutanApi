const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.json');
const cors = require('cors');
const playersProvider = require('./providers/players');
const competitionProvider = require('./providers/competitions');
const calendarProvider = require('./providers/calendars');
const { password } = require('./middleware/password')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/competition', competitionProvider.insertCompetition);
app.delete('/competition/:id', competitionProvider.deleteCompetition);
app.get('/competitions', competitionProvider.getCompetitions);

app.post('/calendar', calendarProvider.insertMatch)
app.get('/calendar', calendarProvider.getMatches)
app.put('/calendar/:id', calendarProvider.updateMatch)
app.delete('/calendar/:id', calendarProvider.deleteMatch)

app.post('/players', playersProvider.insertPlayer);
app.get('/players', playersProvider.getPlayers);
app.delete('/player/:id', playersProvider.deletePlayer);
app.put('/player/:id', password ,playersProvider.updateStastics);

mongoose.connect(`mongodb+srv://orangutan:orangutanclan@cluster-nk1dh51w.ojp1x.mongodb.net/heroku_nk1dh51w?retryWrites=true&w=majority`,
    { useNewUrlParser: true });
app.listen(process.env.PORT || 5001, () => { console.log('Server listening on port 5000') });
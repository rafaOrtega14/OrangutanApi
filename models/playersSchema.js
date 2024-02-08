const mongoose = require('mongoose');
 
const playerSchema = new mongoose.Schema({
  name: String,
  surname : String,
  nickname : String,
  stats : [{
    totalpoints : Number,
    gamesplayed : Number,
    threes : Number,
    competitionId : mongoose.Types.ObjectId
  }]
});

module.exports = mongoose.model('players', playerSchema);
const mongoose = require('mongoose');
 
const competitionSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('competition', competitionSchema);
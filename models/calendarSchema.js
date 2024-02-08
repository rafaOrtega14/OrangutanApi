const mongoose = require('mongoose');
 
const calendarSchema = new mongoose.Schema({
  rival: String,
  date: Date,
  court: String
});

module.exports = mongoose.model('calendars', calendarSchema);
const calendarSchema = require('../models/calendarSchema');
const mongoose = require('mongoose')

async function insertMatch(req, res) {
  const { rival, date, court} = req.body
    const newMatch = new calendarSchema({
      rival,
      date: Date.parse(date),
      court,
    })
    res.send(await newMatch.save());
}

async function getMatches(req, res){
    const matches = await calendarSchema.find();
    res.send(matches);
}

async function updateMatch(req, res){
  const matches = await calendarSchema.updateOne({_id: mongoose.Types.ObjectId(req.params.id)}, req.body);
  res.send(matches);
}

async function deleteMatch(req, res){
  const matches = await calendarSchema.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)});
  res.send(matches);
}

module.exports = {insertMatch ,getMatches, deleteMatch, updateMatch};
const mongoose = require('mongoose')
const competitionSchema = require('../models/competitionSchema');

async function insertCompetition(req,res) {
    const newCompetition = new competitionSchema({
        name : req.body.competitionName
    })
    res.send(await newCompetition.save());
}

async function deleteCompetition(req,res) {
    const competition = await competitionSchema.findOne(
        {_id : mongoose.Types.ObjectId(req.params.id)}
    );
    res.send(await competition.remove());
}

async function getCompetitions(req,res){
    const competitions = await competitionSchema.find();
    res.send(competitions);
}

module.exports = {insertCompetition,deleteCompetition,getCompetitions};
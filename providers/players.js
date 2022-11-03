const mongoose = require('mongoose')
const playerSchema = require('../models/playersSchema');

async function insertPlayer(req, res) {
    var stats = [{
        totalpoints: req.body.totalpoints,
        gamesplayed: req.body.gamesplayed,
        threes: req.body.threes
    }]
    const newPlayer = new playerSchema({
        name: req.body.playername,
        dorsal: req.body.dorsal,
        position: req.body.position,
        surname: req.body.playersurname,
        nickname: req.body.nickname,
        stats: stats
    })
    res.send(await newPlayer.save());
}
async function getPlayers(req, res) {
    const players = await playerSchema.aggregate([
        {$match: {
            disabled: false
        }},
        { 
            $project: {
        stats: { $arrayElemAt: [ "$stats", 1 ] },
        name: 1,
        surname: 1,
        photo: 1,
        nickname: 1,
        disabled: 1,
        position: 1,
        dorsal: 1,
    }}
    ]);
    res.send(players);
}
async function deletePlayer(req, res) {
    const player = await playerSchema.findOne(
        { _id: mongoose.Types.ObjectId(req.params.id) }
    );
    res.send(await player.remove());
}
async function updateStastics(req, res) {
    try {
        const query = {
            "_id": mongoose.Types.ObjectId(req.params.id)
        }
        const updateRes = await playerSchema.updateOne(query, {
            $set:
                {
                    "stats.1.totalpoints": req.body.totalpoints,
                    "stats.1.gamesplayed": req.body.gamesplayed,
                    "stats.1.threes": req.body.threes
                }
        });
        res.send(updateRes);
    } catch (err) {
        console.log(err)
    }

}
module.exports = { insertPlayer, getPlayers, deletePlayer, updateStastics }
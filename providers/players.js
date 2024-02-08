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
        surname: req.body.playersurname,
        nickname: req.body.nickname,
        stats: stats
    })
    res.send(await newPlayer.save());
}
async function getPlayers(req, res) {
    const players = await playerSchema.find();
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
            "stats._id": mongoose.Types.ObjectId(req.params.id)
        }
        const updateRes = await playerSchema.updateOne(query, {
            $set:
                {
                    "stats.$.totalpoints": req.body.totalpoints,
                    "stats.$.gamesplayed": req.body.gamesplayed,
                    "stats.$.threes": req.body.threes
                }
        });
        res.send(updateRes);
    } catch (err) {
        console.log(err)
    }

}
module.exports = { insertPlayer, getPlayers, deletePlayer, updateStastics }
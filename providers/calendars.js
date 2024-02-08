const calendarSchema = require('../models/calendarSchema');
const { getGamesFromSource } = require('../scrapper/calendar')

async function insertGames(req,res) {
    const gamesToInsert = await getGamesFromSource()
    await calendarSchema.deleteMany({})
    const games = await calendarSchema.insertMany(gamesToInsert)
    res.send(games);
}

module.exports = {insertGames};
const getGamesFromSource = async () => {
    const content = await fetch('http://datos.munimadrid.es/datosabiertos/DEPORTES/RESULTADOS_DE_LOS_JUEGOS_PARTIDOS/2024/02/Partidos_20240207.txt')
    const txtContent = await content.text()
    const lines = txtContent.split('\n')
    const orangutanGames = lines.filter(line => line.includes('ORANGU-TANG'))
    const games = orangutanGames.map(orangutanGame => {
        const structuredGame = orangutanGame.split('\t')
        const date = new Date(structuredGame[11] +' '+ structuredGame[12])
        date.setHours(date.getHours() + 1)
        return {
            rival: structuredGame[22] !== 'ORANGU-TANG CLAN' ?  structuredGame[22] : structuredGame[23],
            date,
            court: structuredGame[24]
        }
    })
    return games
}

module.exports = { getGamesFromSource }
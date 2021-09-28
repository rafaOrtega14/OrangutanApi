# OrangutanApi
## 
### GET PLAYERS/
Devuelve una lista con todos los jugadores de Orangutan Clan
### POST PLAYERS/ 
Inserta un jugador en orangutan Clan
#### Request body
```json
{
        name: 'playername',
        surname: 'playersurname',
        nickname: 'nickname',
        stats: [{
        totalpoints: req.body.totalpoints,
        gamesplayed: req.body.gamesplayed,
        threes: req.body.threes
    }]
}
```
### DELETE PLAYER/:id
Borra un jugador cualquiera en funcion a su identificador de mongoDB
### PUT PLAYER/:Id
Modifica la linea estadistica de un jugador teniendo cuenta contraseña
#### REQUEST BODY
```json
{
        totalpoints: 'totalpoints',
        threes: 3,
        gamesplayed: 5
}
```

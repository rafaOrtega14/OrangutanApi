# OrangutanApi
## 
### GET PLAYERS/
Devuelve una lista con todos los jugadores de Orangutan Clan
### POST PLAYERS/ 
Inserta un jugador en orangutan Clan
#### Request body
```json
{
        "name": "playername",
        "surname": "playersurname",
        "nickname": "nickname",
        "stats": [{
        "totalpoints": 50,
        "gamesplayed": 3,
        "threes": 10
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
        "totalpoints": "totalpoints",
        "threes": 3,
        "gamesplayed": 5
}
```
### POST CALENDAR/ 
Inserta un partido en el calendario
#### Request body
```json
{
        "rival": "notiganprisa",
        "date": "2011-10-10T14:48:00",
        "court": "pista 2",
}
```
### GET CALENDAR/ 
Obtiene todos los partidos del calendario

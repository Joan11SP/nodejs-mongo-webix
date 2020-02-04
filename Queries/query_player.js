
var fetch = require('node-fetch');

var api = 'https://jsonplaceholder.typicode.com/users/';
var api_player = 'https://www.balldontlie.io/api/v1/players/';
const peticion = async (id) => {
    try {
        const url = await fetch(api + id);
        const respuesta = url.json();
        return await respuesta;
    } catch (err) {
        console.error(err);
    }
};
const peticion_player = async () => {
    try {
        const url = await fetch(api_player);
        const respuesta = url.json();
        return await respuesta;
    } catch (err) {
        console.error(err);
    }
}


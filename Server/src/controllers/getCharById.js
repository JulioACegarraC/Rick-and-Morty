const axios = require('axios');

function getCharById (res,id) {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data =>{
            const character = {
                id: data.id,
                name: data.name,
                status: data.status,
                gender: data.gender,
                species: data.species,
                image: data.image,
                origin:data.origin,
                location:data.location
            }
            res
                .writeHead(200, {"Content-Type": "application/json"})
                .end(JSON.stringify(character))
        })
        .catch(error =>{
            res
                .writeHead(500, {"content-Type": "text/plain"})
                .end(error.message)
        })
};
module.exports = getCharById;
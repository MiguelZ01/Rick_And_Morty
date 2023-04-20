const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res => res.data) 
    .then((data) => {
        const char = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            status: data.status
        }
        return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(char));
    }))
    .catch((error) => { res.writeHead(500, { "Content-Type": "text/plain" }).end(JSON.stringify(error.message)) })
}

module.export = { getCharById }
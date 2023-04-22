const URl = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }

//         return res
//                 .writeHead(200, {"Content-type": "application/json"})
//                 .end(JSON.stringify(character))
//     })
//     .catch(error => {
//         return res
//                 .writeHead(500, {"Content-type": "text/plain"})
//                 .end(error.message)
//     })
// };

    const getCharById = (req, res) => {
        const { id } = req.params;
        
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
           const { id, status, name, species, origin, image, gender } = response.data;
           res.status(200).json({ id, status, name, species, origin, image, gender });
        })
        .then(() => {
            res.status(404).send('Not fount');
        })
        .catch((error) => {
            res.status(500).json({error: error.message});
        })
    }

module.exports = {
    getCharById
};
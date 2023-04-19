const http = require("http")
const character = require('./utils/data')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes(`/rickandmorty/character`)) { 
        const id = req.url.split('/').at(-1)
        let filterID = character?.filter(char => char.id === Number(id))

        res.writeHead(200, { 'Content-type': 'application/json' })
        return res.end(JSON.stringify(character[id-1]))
    }

    

    
})
.listen(3002, 'localhost')
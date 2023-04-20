const http = require("http")
const getCharById = require("./controllers/getChardById")

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').at(-1)
            return getCharById(res,id)
    }
    
    // if (req.url.includes("rickandmorty/character/")) {
    //     const id = req.url.split('/').at(-1);
    //     const character = data.find((char) => char.id === +id);

    //     if (character) {
    //         res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(character));
    //         } 
            
    //     else {
    //         res.writeHead(404, { "Content-Type": "application/json" }).end(JSON.stringify({ error: "Character not found" }));
    //     }
    // }
})
.listen(3001)
let http = require("http");
const character = require("./utils/data");
const PORT = 3001;
http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")) {
        let id = req.url.split('/').pop();
        const caracter = character.filter(char => char.id===Number(id))[0];
        res.writeHead(200,{"Content-Type": "application/json"})
        res.end(JSON.stringify(caracter));
        console.log(caracter);
      }
}).listen(PORT, "localhost");
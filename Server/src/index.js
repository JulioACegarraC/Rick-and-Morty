let http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById")
http
  .createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split('/').pop();
    if(req.url.includes("/rickandmorty/character")){
      getCharById(res,id)
    }
}).listen(PORT, "localhost");
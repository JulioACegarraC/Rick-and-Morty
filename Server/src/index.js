//*const getCharById = require('./controllers/getCharById');
//!const login = require('./controllers/login');
const { postFav , deleteFav } = require('./controllers/handleFavorites');
const express = require('express');
const router = require ('./routes/index');
const server = express();
const PORT = 3001;
//? Mi servidor esta funcionando
//?server.get("/", (req, res, next) => {
//?   res.status(200).send("Julio y Pablo...")
//?})

//* El getCharById esta funcionando
//* server.get("/rickandmorty/character/:id", getCharById)

//! El login esta funcionando
//!server.get("/rickandmorty/login/", login)

//? No pude probar el put no me reconoce el json
// server.post("/rickandmorty/fav/", postFav);
// server.delete("/rickandmorty/fav/:id", deleteFav);

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
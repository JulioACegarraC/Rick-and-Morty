const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById (req,res) {
    try {
        const { id } = req.params;
        const response = await axios.get(URL+id);
        const { name, status,gender,species,image,origin,location } = response.data;
        const character = {id,name,status,gender,species,image,origin,location};
        if(!character.name) return res.status(404).send(`Not Found`);
        return res.status(200).json(character);
    } catch (error) {
        return res.status(500).send(error.message);   
    }
}
module.exports = getCharById;
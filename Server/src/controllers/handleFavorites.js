let myFavorites = [];
function postFav (req,res) {
    console.log(myFavorites);
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites);
}
function deleteFav (req,res) {
    const { id } = req.params;
    console.log(id)
    let filtered = myFavorites.filter(element => element.id !== id);
    myFavorites = filtered;
    return res.json(myFavorites);
}
module.exports = { postFav, deleteFav };
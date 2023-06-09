const users = require('../utils/users')
function login (req,res) {
    const { email, password } = req.query;
    let access = false;
    users.forEach(element => {
        element.email === email && element.password === password
        ? access= true
        : null
    }) 
    return res.status(200).json({access})
}
module.exports = login;
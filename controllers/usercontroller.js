const bcrypt = require('bcrypt');
const User = require('../models/User');
const saltRounds = 10;
async function signUp(req, res) {
    try {
        
        let password = bcrypt.hashSync(req.body.password,saltRounds);
        console.log(password , 'password');
        let user = new User(req.body);
        user.password= password;
        await user.save();
        res.redirect('/');//it will tale to the path of login page
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    signUp
}
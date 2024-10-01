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

async function doLogin(req,res){
    try{
        console.log(req.body);
        let user = await User.findOne({email:req.body.email})
        if(!user){
            res.end("<h1> NO such user exist </h1>")
        }else{
            let isMatch = await bcrypt.compare(req.body.password , user.password);
            if(isMatch){
                res.end("<h1> log in sucessful </h1>")
            }else{
                res.end("<h1> Incorrect Password </h1>")
            }
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    signUp,
    doLogin
}
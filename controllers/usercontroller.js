const User = require('../models/User');
 async function signUp(req,res){
    try{
        let user = new User(req.body) ;
        await user.save();
        res.end("<h4>good</h4>")
    }catch(err){
        console.log(err);
    }
 }

 module.exports= {
    signUp
 }
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2
const User = require('../models/User');
const saltRounds = 10;
async function signUp(req, res) {
    try {
        console.log(req.body);
        console.log("............");
        console.log(req.file);
        cloudinary.config({
            cloud_name: "dln7svzdo",
            api_key: "776616335115449",
            api_secret: "IFjZ6HTYGa1plOJB1xoObAE-fgc"
        })
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result , 'result');
        let password = bcrypt.hashSync(req.body.password,saltRounds);
        let user = new User(req.body);
        user.password= password;
        user.profileImage = result.secure_url;
        await user.save();
        res.redirect('/');//it will tale to the path of login page
    } catch (err) {
        console.log(err.message , 'msg');
    }
}

async function doLogin(req, res) {
    try {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.end("<h1> NO such user exist </h1>")
        } else {
            let isMatch = await bcrypt.compare(req.body.password, user.password);
            if (isMatch) {
                res.end("<h1> log in sucessful </h1>")
            } else {
                res.end("<h1> Incorrect Password </h1>")
            }
        }
    } catch (err) {
        console.log(err);
    }
}

async function getUsers(req,res){
    try{
        let users = await User.find({});
        console.log(users);
        res.render('userlist',{
            users:users
        });

    }catch(err){
        console.log(err.message);
    }
}
module.exports = {
    signUp,
    doLogin,
    getUsers
}
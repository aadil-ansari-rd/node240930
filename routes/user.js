const express = require('express');
const usercontroller = require('../controllers/usercontroller')
const router = express.Router();
router.use(express.urlencoded({extended:false}));

router.get('/', (req,res)=>{
    res.render('home');
})

router.get('/signup/window', (req,res)=>{
    res.render('signuppage');
})

router.post('/signup', (req,res)=>{
    usercontroller.signUp(req,res);
})
module.exports= router;
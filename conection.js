const mongoose = require('mongoose');


async function connection(){
    try{
        await mongoose.connect('mongodb://localhost:27017/sept30');
        console.log('Databse connected successfully')
    }catch(err){
        console.log(err);
    }
}

module.exports = connection;
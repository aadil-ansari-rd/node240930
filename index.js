const express = require('express');
const connection = require('./conection');
const user = require('./routes/user');
const path = require('path');

connection();
const app = express();

app.use(user);
app.set('view engine','ejs');
app.set('views', path.resolve('./views'));


app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on port 3000")
    }
})
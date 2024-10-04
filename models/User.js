const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamps')
const UserSchema = new Schema({
    firstName : { type : String },
    lastName : { type : String },
    email : { type : String },
    
    password: { type : String },
    mobileNo : { type : String },
    profileImage: { type: String },//image url will save in this field . 
    //image will not save in mongodb but it will store at third pary like :S3 of AWS or
    // cloudnary
    createdAt : Date,
    updatedAt : Date
})
UserSchema.plugin(timestamps , {index : true});
module.exports = mongoose.model('user', UserSchema);
//                              (tb name , created with schema name)
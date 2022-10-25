const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scdProject');
const Schema = mongoose.Schema;
const House = new Schema({
    hNo : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    blockN : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    desc : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    type : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    ownerId : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    residentId : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
},
{
    timestamps: true
});




module.exports = mongoose.model('House', House);
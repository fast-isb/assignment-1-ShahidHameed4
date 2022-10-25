const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scdProject');
const Schema = mongoose.Schema;
const Annoucement = new Schema({
    name : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    date : { type: Date, required : true},
    desc : {type : String, required : true, max : [127, "Max Length is 127 characters"] },
    addedBy : {type : String, required : true, max : [127, "Max Length is 127 characters"] },
},
{
    timestamps: true
});




module.exports = mongoose.model('Annoucement', Annoucement);
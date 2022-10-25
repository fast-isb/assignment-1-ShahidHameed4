const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scdProject');
const Schema = mongoose.Schema;
const Complaint = new Schema({
    id : {type : String, required : true, max : [12, "Max Length is 12 characters"] },
    hNo : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    email : { type: Date, required : true},
    problem : {type : String, required : true, max : [127, "Max Length is 127 characters"] },
    desc : {type : String, required : true, max : [127, "Max Length is 127 characters"] },
    status : {type : String, required : true, max : [12, "Max Length is 12 characters"] },
    comments : {type : String, required : true, max : [200, "Max Length is 200 characters"] },
},
{
    timestamps: true
});




module.exports = mongoose.model('Complaint', Complaint);
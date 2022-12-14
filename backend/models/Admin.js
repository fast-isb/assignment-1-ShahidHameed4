const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/scdProject')
const Schema = mongoose.Schema
const Admin = new Schema({
  name: { type: String, required: true, max: [127, 'Max Length is 127 characters'] },
  userName: { type: String, required: true, max: [127, 'Max Length is 127 characters'] },
  password: { type: String, required: true, max: [127, 'Max Length is 127 characters'] }
},
{
  timestamps: true
})

module.exports = mongoose.model('Admin', Admin)

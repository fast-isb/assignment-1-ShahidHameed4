import mongoose from '../Database/mongoose.js'

const Schema = mongoose.Schema
const Annoucement = new Schema({
  date: { type: Date, required: true },
  desc: { type: String, required: true, max: [127, 'Max Length is 127 characters'] },
  addedBy: { type: String, required: true, max: [127, 'Max Length is 127 characters'] }
},
{
  timestamps: true
})

const ann = mongoose.model('Annoucement', Annoucement)
export default ann

import mongoose from '../Database/mongoose.js'
const Schema = mongoose.Schema
const Complaint = new Schema({
  id: { type: String, required: true, max: [12, 'Max Length is 12 characters'] },
  hNo: { type: String, required: true, max: [127, 'Max Length is 127 characters'] },
  email: { type: String, required: true },
  problem: { type: String, required: true, max: [127, 'Max Length is 127 characters'] },
  desc: { type: String, required: true, max: [127, 'Max Length is 127 characters'] },
  status: { type: String, required: true, max: [12, 'Max Length is 12 characters'] },
  comments: { type: String, required: true, max: [200, 'Max Length is 200 characters'] }
},
{
  timestamps: true
})

const model = mongoose.model('Complaint', Complaint)
export default model


import mongoose from '../Database/mongoose.js'
const Schema = mongoose.Schema
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    concern: {
      type: String,
      required: true,
    },
  },

);
let Contactus=mongoose.model("ContactCencern", ContactSchema);
export default Contactus;
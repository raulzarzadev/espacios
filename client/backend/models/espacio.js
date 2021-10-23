import mongoose from 'mongoose'
const Schema = mongoose.Schema

const espacio = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  id: String,
  name: String,
  address: String,
  images: Array,
  contracts: Array,
  services: Array,
  coments: String,
  doorPassword: String,
  advertLink: String,
  guests: Number
})

mongoose.models = {}

const Espacio = mongoose.model('Espacio', espacio)

export default Espacio

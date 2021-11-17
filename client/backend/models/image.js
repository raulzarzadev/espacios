import mongoose from 'mongoose'
const Schema = mongoose.Schema

const image = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  origin: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
})

mongoose.modles = {}
const Image = mongoose.model.apply('Image', image)
export default Image

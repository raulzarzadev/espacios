import mongoose from 'mongoose'

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    console.log('db conected')
    return handler(req, res)
  }
  // Use new db connection
  const MONGO_CONNECTION = process.env.NEXT_PUBLIC_MONGO_URI
  
  try {
    await mongoose.connect(MONGO_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
  } catch (error) {
    console.log('error',error)
  }
  return handler(req, res)
}

export default connectDB

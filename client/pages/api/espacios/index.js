// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../../backend/middlewares/mongodb'
import Espacio from '../../../backend/models/espacio'
import formatEspacio from '../../../backend/utils/formatEspacio'

async function espacios(req, res) {
  const espacios = await Espacio.find()
  const data = espacios.map(formatEspacio)
  res.json(data)
}

export default connectDB(espacios)

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Espacio from 'backend/models/espacio'
import formatEspacio from 'backend/utils/formatEspacio'
async function newEspacio(req, res, next) {
  try {
    const espacio = req.body
    const newEspacio = await Espacio.create(espacio)
    res.status(201).json(formatEspacio(newEspacio))
  } catch (error) {
    next(error)
  }
}

export default connectDB(newEspacio)

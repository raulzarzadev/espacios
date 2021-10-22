import Espacio from 'backend/models/espacio'
import formatEspacio from 'backend/utils/formatEspacio'

export default async function espacio(req, res) {
  const {
    query: { id }
  } = req

  try {
    const espacio = await Espacio.findById(id)
    console.log(espacio)
    res.status(200).json(formatEspacio(espacio))
  } catch (error) {
    console.log(err)
  }
}

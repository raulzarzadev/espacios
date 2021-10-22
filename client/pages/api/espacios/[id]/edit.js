import formatEspacio from 'backend/utils/formatEspacio'
import Espacio from '../../../../backend/models/espacio'
export default async function espacio(req, res) {
  const {
    query: { id },
    body
  } = req

  try {
    const espacio = await Espacio.findByIdAndUpdate(id, body, { new: true })
    res.status(200).json(formatEspacio(espacio))
  } catch (error) {
    console.log(err)
  }
}

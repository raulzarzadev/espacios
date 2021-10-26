import Espacio from 'backend/models/espacio'
import formatEspacio from 'backend/utils/formatEspacio'
import formatResponse from '../../../../backend/utils/formatResponse'

export default async function espacio(req, res) {
  const {
    query: { id },
    method,
    body
  } = req

  if (method === 'DELETE') {
    try {
      const espacio = await Espacio.findByIdAndDelete(id)
      res.status(200).json(formatResponse(true, 'DELETE_SUCCESS'))
    } catch (error) {
      console.log(error)
    }
  }
  if (method === 'GET') {
    try {
      const espacio = await Espacio.findById(id)
      res.status(200).json(formatEspacio(espacio))
    } catch (error) {
      console.log(error)
    }
  }
  if (method === 'PUT') {
    try {
      const espacio = await Espacio.findByIdAndUpdate(id, body, { new: true })
      res.status(200).json(formatEspacio(espacio))
    } catch (error) {
      console.log(error)
    }
  }
}
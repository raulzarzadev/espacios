import axios from 'axios'
import { SUB_ESPACIOS } from '../HARD_DATA'

export default async function SubEspacios(req, res) {
  const { id } = req?.query
  const subEspacios = SUB_ESPACIOS

  const subEspacio = subEspacios.find((espacio) => espacio.id === id)

  res.status(200).json(subEspacio)
}

import axios from 'axios'
import { ESPACIOS } from '../HARD_DATA'

export default async function espacio(req, res) {
  const { id } = req?.query
  const espacios = ESPACIOS

  const espacio = espacios.find((espacio) => espacio.id === id)

  res.status(200).json(espacio)
}

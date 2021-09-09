import type { NextApiRequest, NextApiResponse } from 'next'
import { ESPACIOS } from '../HARD_DATA'

export default function espacio(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id }
  } = req

  const espacio = ESPACIOS.find((espacio) => espacio.id === id)
  res.status(200).json(espacio)
}

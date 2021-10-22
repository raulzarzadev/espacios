// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { espacioType } from '@comps/Cards/EspacioCard'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ESPACIOS } from '../HARD_DATA'
import connectDB from '../../../backend/middlewares/mongodb'
import Espacio from '../../../backend/models/espacio'

async function newEspacio(
  req: NextApiRequest,
  res: NextApiResponse<Array<espacioType>>,
  next: any
) {
  try {
    const espacio = req.body
    const newEspacio = await Espacio.create(espacio)
    res.status(201).json(newEspacio)
  } catch (error) {
    next(error)
  }
}

export default connectDB(newEspacio)

import type { NextApiRequest, NextApiResponse } from 'next'
import {  SERVICES } from '../HARD_DATA'

export default function service(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id }
  } = req

  const service = SERVICES?.find((service) => service.id === id)
  res.status(200).json(service)
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { espacioType } from '@comps/Cards/EspacioCard'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ESPACIOS } from '../HARD_DATA'

export default function espacios(
  req: NextApiRequest,
  res: NextApiResponse<Array<espacioType>>
) {
  setTimeout(() => {
    res.status(200).json(ESPACIOS)
  }, 2000)
}

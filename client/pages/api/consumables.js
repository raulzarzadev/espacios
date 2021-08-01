import { CONSUMABLES } from './HARD_DATA'

export default function consumables(req, res) {
  res.status(200).json({
    consumables: CONSUMABLES
  })
}

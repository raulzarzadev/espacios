import { ITEMS } from "./HARD_DATA";

export default function items(req, res) {
  res.status(200).json({
    items: ITEMS
  })
}

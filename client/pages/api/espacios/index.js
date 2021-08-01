import { ESPACIOS } from "../HARD_DATA";

export default function espacios(req, res) {
  res.status(200).json({
    espacios: ESPACIOS
  })
}

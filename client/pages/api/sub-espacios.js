import { SUB_ESPACIOS } from "./HARD_DATA";

export default function subEspacios(req, res) {
  res.status(200).json({
    subEspacios: SUB_ESPACIOS
  })
}

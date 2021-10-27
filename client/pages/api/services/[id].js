export default function service(req, res) {
  const {
    query: { id }
  } = req

  res.status(200).json({service})
}

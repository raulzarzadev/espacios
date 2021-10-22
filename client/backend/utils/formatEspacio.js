export default function formatEspacio({ _id, _doc }) {
  return {
    id: _id,
    ..._doc
  }
}

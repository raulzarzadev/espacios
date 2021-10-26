export default function formatResponse(ok, type, res) {
  return { ok, type, res: { ...res?.data, id: res?.data?.id } }
}

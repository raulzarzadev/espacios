import { customRandom } from 'nanoid'

const uid = customRandom('vwxyz123456', 12, (size) => {
  return new Uint8Array(size).map(() => 256 * Math.random())
})

export default uid
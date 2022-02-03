import { Timestamp } from 'firebase/firestore'

export const formatResponse = (ok, type, res) => {
  return { type, ok, res }
}
export const normalizeDoc = (doc) => {
  if (!doc?.exists) return null // The document  not exist
  const data = doc.data()
  const id = doc.id
  const res = deepFormatDocumentDates(data)
  return {
    id,
    ...res
  }
}

export const unfierebazeDate = (date, from) => {
  return date ? date?.toMillis() : null
}

export const unfierebazeDates = (dates = {}) => {
  let aux = {}
  for (const date in dates) {
    if (dates[date]) {
      aux = {
        ...aux,
        [date]: dates[date] ? unfierebazeDate(dates[date], 'dates') : null
      }
    }
  }
  return aux
}
const DATE_FIELDS = [
  'birth',
  'date',
  'createdAt',
  'updatedAt',
  'finishAt',
  'startAt',
  'registryDate',
  'publishEnds',
  'publishStart',
  'lastUpdate'
]
// TODO make sure that this wotks in both cases
export const deepFormatDocumentDates = (
  object,
  { toFirebaseFormat = true } = {}
) => {
  const AUX_OBJ = object
  let count = 0
  Object.keys(object).forEach((key) => {
    if (DATE_FIELDS.includes(key)) {
      const firebaseDate = object[key]
      toFirebaseFormat
        ? (AUX_OBJ[key] = firebaseDate.toMillis())
        : (AUX_OBJ[key] = Timestamp.fromDate(new Date(object[key])))
    }
    if (typeof object[key] === 'object') {
      // ------------------------------ IF IS ARRAY ------------------------------
      if (Array.isArray(object[key])) {
        object[key].map((item) => {
          return deepFormatDocumentDates(item)
        })
      } else {
        deepFormatDocumentDates(object[key])
      }
      // ------------------------------ IF IS OBJECT ------------------------------
    }
  })
  return AUX_OBJ
}

export const normalizeDocs = (docs = []) =>
  docs?.map((doc) => normalizeDoc(doc))

export const dateToFirebaseFormat = (date) =>
  Timestamp.fromDate(new Date(date)) || null

export const mapUserFromFirebase = (user) => {
  const { email, displayName, photoURL } = user
  return {
    joinedAt: dateToFirebaseFormat(new Date()),
    email,
    name: displayName,
    image: photoURL,
    id: user.uid
  }
}

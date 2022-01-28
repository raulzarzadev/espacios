import { Timestamp } from "firebase/firestore"

export const formatResponse = (ok, type, res) => {
  return { type, ok, res }
}
export const normalizeDoc = (doc) => {
  if (!doc?.exists) return null // The document  not exist
  const data = doc.data()
  const id = doc.id
  const res = deepDesfirebaseDates(data)
  return {
    id,
    ...res
  }
}

export const unfierebazeDate = (date) => (date ? date?.toMillis() : null)
export const unfierebazeDates = (dates = {}) => {
  let aux = {}
  for (const date in dates) {
    if (dates[date]) {
      aux = {
        ...aux,
        [date]: dates[date] ? unfierebazeDate(dates[date]) : null
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
export const deepDesfirebaseDates = (object) => {
  const AUX_OBJ = object
  Object.keys(object).forEach((key) => {
    if (DATE_FIELDS.includes(key)) AUX_OBJ[key] = unfierebazeDate(object[key])
    if (typeof object[key] === 'object') {
      // ------------------------------ IF IS ARRAY ------------------------------
      if (Array.isArray(object[key])) {
        object[key].map((item) => {
          return deepDesfirebaseDates(item)
        })
        
      } else {
         deepDesfirebaseDates(object[key])
      }
      // ------------------------------ IF IS OBJECT ------------------------------
    }
  })
  return AUX_OBJ
}

export const normalizeDocs = (docs = []) =>
  docs?.map((doc) => normalizeDoc(doc))
export const datesToFirebaseFromat = ({ document = null }) => {
  const AUX_DOCUMENT = {}

  if (!document) return 'no document'
  if (typeof document !== 'object') {
    return 'is not an object'
  }
  Object.keys(document).forEach((key) => {
    AUX_DOCUMENT[key] = document[key]

    if (DATE_FIELDS.includes(key)) {
      AUX_DOCUMENT[key] = new Date(AUX_DOCUMENT[key]).toString()
    }

    if (typeof document[key] === 'object') {
      // HAZLO RECURSIVO
      AUX_DOCUMENT[key] = datesToFirebaseFromat({
        document: document[key]
      })
    }
    if (DATE_FIELDS.includes(key)) {
      const aux = dateToFirebaseFormat(document[key])
      AUX_DOCUMENT[key] = aux
    }
  })
  return AUX_DOCUMENT
}

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

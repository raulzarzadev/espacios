import { async } from '@firebase/util'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  onSnapshot,
  where,
  query
} from 'firebase/firestore'
import { db } from './client'
import { formatResponse, normalizeDoc } from './firebase-helpers'
export const createEspacio = async (adminId, newEspacio) => {
  const docRef = await addDoc(collection(db, 'espacios'), {
    admin: { id: adminId },
    ...newEspacio
  })
  return formatResponse(true, 'ESPACIO_CREATED', { id: docRef.id })
}
export const getAdminEspacios = async (adminId, callback) => {
  const q = query(collection(db, 'espacios'), where('admin.id', '==', adminId))
  const unsuscribe = onSnapshot(q, (querySnapShot) => {
    const espacios = []
    querySnapShot.forEach((doc) => {
      espacios.push(normalizeDoc(doc))
    })
    callback(espacios)
  })
}
export const getAdminEspacio = async (adminId, espacioId, callback) => {
  const unsub = onSnapshot(doc(db, 'espacios', espacioId), (doc) => {
    callback(doc.data())
  })
}
export const updateEspacio = (espacioId, espacio) => {
  console.log(`espacioId`, espacioId)
}

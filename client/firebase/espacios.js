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
  query,
  updateDoc,
  Timestamp
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
    callback(normalizeDoc(doc))
  })
}
export const updateEspacio = async (espacioId, espacio) => {
  const espacioRef = doc(db, 'espacios', espacioId)
  return updateDoc(espacioRef, {
    ...espacio,
    lastUpdate: Timestamp.now()
  })
    .then((res) => formatResponse(true, 'ESPACIO_UPDATED', res))
    .catch((err) => formatResponse(true, 'ERROR_ESPACIO_UPDATED', err))
}

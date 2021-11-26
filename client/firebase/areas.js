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
export const createArea = async (adminId, newArea) => {
  const docRef = await addDoc(collection(db, 'areas'), {
    admin: { id: adminId },
    ...newArea
  })
  return formatResponse(true, 'AREA_CREATED', { id: docRef.id })
}
export const getAdminAreas = async (adminId, callback) => {
  const q = query(collection(db, 'areas'), where('admin.id', '==', adminId))
  const unsuscribe = onSnapshot(q, (querySnapShot) => {
    const areas = []
    querySnapShot.forEach((doc) => {
      areas.push(normalizeDoc(doc))
    })
    callback(areas)
  })
}
export const getAdminArea = async (adminId, AreaId, callback) => {
  const unsub = onSnapshot(doc(db, 'areas', AreaId), (doc) => {
    callback(normalizeDoc(doc))
  })
}
export const updateArea = async (AreaId, Area) => {
  const AreaRef = doc(db, 'areas', AreaId)
  return updateDoc(AreaRef, {
    ...Area,
    lastUpdate: Timestamp.now()
  })
    .then((res) => formatResponse(true, 'AREA_UPDATED', res))
    .catch((err) => formatResponse(true, 'ERROR_AREA_UPDATED', err))
}

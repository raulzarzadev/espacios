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
export const createItem = async (adminId, newItem) => {
  const docRef = await addDoc(collection(db, 'items'), {
    admin: { id: adminId },
    ...newItem
  })
  return formatResponse(true, 'ITEM_CREATED', { id: docRef.id })
}
export const getAdminItems = async (adminId, callback) => {
  const q = query(collection(db, 'items'), where('admin.id', '==', adminId))
  const unsuscribe = onSnapshot(q, (querySnapShot) => {
    const items = []
    querySnapShot.forEach((doc) => {
      items.push(normalizeDoc(doc))
    })
    callback(items)
  })
}
export const getAdminItem = async (adminId, itemId, callback) => {
  const unsub = onSnapshot(doc(db, 'items', itemId), (doc) => {
    callback(normalizeDoc(doc))
  })
}
export const updateItem = async (itemId, item) => {
  const itemRef = doc(db, 'items', itemId)
  return updateDoc(itemRef, {
    ...item,
    lastUpdate: Timestamp.now()
  })
    .then((res) => formatResponse(true, 'ITEM_UPDATED', res))
    .catch((err) => formatResponse(true, 'ERROR_ITEM_UPDATED', err))
}

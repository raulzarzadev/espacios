import { es } from 'date-fns/locale'
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  where,
  query,
  updateDoc,
  Timestamp,
  arrayUnion,
  getDoc
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
export const listenEspacio = (espacioId, callback) => {
  onSnapshot(doc(db, `espacios/${espacioId}`), (doc) => {
    callback(normalizeDoc(doc))
  })
}
export const getAdminEspacio = async (adminId, espacioId, callback) => {
  const unsub = onSnapshot(doc(db, 'espacios', espacioId), (doc) => {
    console.log('doc', doc.data())
    // callback(normalizeDoc(doc))
  })
}
export const addImageToEspacio = async (espacioId, image) => {
  const timestamps = {
    lastUpdate: Timestamp.now()
  }

  const espacioRef = doc(db, 'espacios', espacioId)
  return updateDoc(espacioRef, {
    images: arrayUnion({ ...image, ...timestamps })
  })
    .then((res) => formatResponse(true, 'ESPACIO_UPDATED', res))
    .catch((err) => formatResponse(false, 'ESPACIO_UPDATED_ERROR', err))
}

export const deleteImageFromEspacio = async (espacioId, imageUrl) => {
  const espacioRef = doc(db, 'espacios', espacioId)
  const docSnap = await getDoc(espacioRef)
  const images = docSnap.data().images
  const newImages = images.filter(({ image }) => image !== imageUrl)
  return updateDoc(espacioRef, {
    images: newImages
  })
    .then((res) => formatResponse(true, 'IMAGE_ESPACIO_DELETED', res))
    .catch((err) => formatResponse(false, 'IMAGE_ESPACIO_DELETED_ERROR', err)) 
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

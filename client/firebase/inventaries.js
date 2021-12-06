import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  where,
  query,
  updateDoc,
  Timestamp,
  orderBy,
  limit
} from 'firebase/firestore'
import { db } from './client'
import { formatResponse, normalizeDoc } from './firebase-helpers'

export const newInventory = (inventory, { adminId = undefined }) => {
  return createInventory(adminId, inventory)
}

export const getLastInventory = async (
  { itemId = '', espacioId = '', areaId = '' },
  callback = () => {}
) => {
  const q = query(
    collection(db, 'inventories'),
    where('espacioId', '==', espacioId),
    where('area.id', '==', areaId),
    where('item.id', '==', itemId),
    orderBy('createdAt', 'desc'),
    limit(1)
  )
  onSnapshot(q, (querySnapshot) => {
    let counts = []
    querySnapshot.forEach((doc) => {
      counts.push(normalizeDoc(doc))
    })
    const lastCount = counts[0]
    callback(lastCount)
  })
}

export const getInventoryByEspacio = async ({ espacioId }, callback) => {
  const q = query(
    collection(db, 'inventories'),
    where('espacioId', '==', espacioId),
    orderBy('createdAt', 'desc')
  )
  onSnapshot(q, (querySnapshot) => {
    let counts = []
    querySnapshot.forEach((doc) => {
      counts.push(normalizeDoc(doc))
    })
    callback(counts)
  })
}

export const getLastItemCount = async ({ espacioId }, callback) => {
  const q = query(
    collection(db, 'inventories'),
    where('espacioId', '==', espacioId),
    orderBy('createdAt', 'desc')
  )
  onSnapshot(q, (querySnapshot) => {
    let counts = []
    querySnapshot.forEach((doc) => {
      counts.push(normalizeDoc(doc))
    })
    callback(counts)
  })
}

export const createInventory = async (adminId, newInventory) => {
  const docRef = await addDoc(collection(db, 'inventories'), {
    admin: { id: adminId },
    createdBy: adminId,
    createdAt: Timestamp.now(),
    ...newInventory
  })
  return formatResponse(true, 'INVENTORY_CREATED', { id: docRef.id })
}

export const getAdmininventories = async (adminId, callback) => {
  const q = query(
    collection(db, 'inventories'),
    where('admin.id', '==', adminId)
  )
  const unsuscribe = onSnapshot(q, (querySnapShot) => {
    const inventories = []
    querySnapShot.forEach((doc) => {
      inventories.push(normalizeDoc(doc))
    })
    callback(inventories)
  })
}
export const getAdminInventory = async (adminId, inventorieId, callback) => {
  const unsub = onSnapshot(doc(db, 'inventories', inventorieId), (doc) => {
    callback(normalizeDoc(doc))
  })
}
export const updateInventory = async (inventorieId, inventorie) => {
  const inventorieRef = doc(db, 'inventories', inventorieId)
  return updateDoc(inventorieRef, {
    ...inventorie,
    lastUpdate: Timestamp.now()
  })
    .then((res) => formatResponse(true, 'INVENTORY_UPDATED', res))
    .catch((err) => formatResponse(true, 'ERROR_INVENTORY_UPDATED', err))
}

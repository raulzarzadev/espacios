import firebase from 'firebase/app'
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import 'firebase/storage'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

import {
  datesToFirebaseFromat,
  formatResponse,
  mapUserFromFirebase,
  normalizeDoc
} from './firebase-helpers'
const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
const app = initializeApp(firebaseConfig)
const db = getFirestore()

const auth = getAuth()
const normalizeUser = (data) => {
  const {
    email,
    emailVerified,
    accessToken,
    uid: id,
    phoneNumber,
    photoURL,
    displayName
  } = data

  return {
    email,
    emailVerified,
    accessToken,
    uid: id,
    phoneNumber,
    photoURL,
    displayName
  }
}

export const userStatus = (callback = (user) => console.log(`user`, user)) => {
  onAuthStateChanged(auth, (user) => {
    
    if (user) {
      callback(normalizeUser(user))
    } else {
      callback(null)
    }
  })
}

export const singupWithEmail = async ({ email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  const user = userCredential.user
  const newUser = { email: user.email }
  const userCrated = await createNewUser(newUser)
  return userCrated
}

export const signInWithEmail = async ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
     // console.log(`normalizeUser(res)`, normalizeUser(res))
      console.log(`res`, res)
      // callback(res)
    })
    .catch((err) => console.log(`err`, err))
}

export const logout = () => {
  signOut(auth)
}

/* -------------------- */
/* ---------USERS------ */
/* -------------------- */

const getUser = async (userId) => {
  return await db
    .collection('users')
    .doc(userId)
    .get()
    .then(normalizeDoc)
    .catch((err) => {
      formatResponse(false, 'ERROR_USER', err)
    })

  // return res.data()
}

const createNewUser = async (user) => {
  console.log(`user`, user)
  return addDoc(collection(db, 'users'), user)
    .then((res) => {
      return { id: res.id, ...user }
    })
    .catch((err) => console.log(`err`, err))
}

export const updateUser = async (user) => {
  const eventRef = db.collection('users').doc(user.id)
  const datesInFirebaseFormat = datesToFirebaseFromat(user)
  try {
    const res = await eventRef.update({
      ...user,
      ...datesInFirebaseFormat
    })
    return formatResponse(true, 'USER_UPDATED', res)
  } catch (err) {
    return formatResponse(false, 'UPDATE_ERROR', err)
  }
}

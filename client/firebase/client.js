import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import 'firebase/storage'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc
} from 'firebase/firestore'

import {
  formatResponse,
} from './firebase-helpers'


const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
const app = initializeApp(firebaseConfig)
export const db = getFirestore()

const auth = getAuth()

export const userStatus = (callback = (user) => console.log(`user`, user)) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const db_user = await getUser(user.uid)
      callback({ ...db_user })
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
  const newUser = { email: user.email, id: user.uid }
  const userCrated = await createNewUser(newUser)
  return userCrated
}

export const signInWithEmail = async ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // console.log(`normalizeUser(res)`, normalizeUser(res))
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
  const docRef = doc(db, 'users', userId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }
}

const createNewUser = async (user) => {
  const usersRef = collection(db, 'users')
  return setDoc(doc(usersRef, user.id), user)
    .then((res) => formatResponse(true, 'USER_CREATED', res))
    .catch((err) => formatResponse(false, 'ERROR_USER_CREATED', err))
}

/* ------------------------------------------------------------------------------------------- */
/*  ---------------------***---------    IMAGES MANAGE    ----------***-------------------------- */
/* ------------------------------------------------------------------------------------------- */
import { doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from 'firebase/storage'
import { db } from './client'
import { formatResponse } from './firebase-helpers'

export const fbUploadImage = (
  { file, carpet = 'images' },
  callback = ({ progress }) => {}
) => {
  const storage = getStorage()
  const id = new Date().getTime()
  const storageRef = ref(storage, `${carpet}/${file?.name}-${id}`)
  const uploadTask = uploadBytesResumable(storageRef, file)
  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        callback({ progress: progress.toFixed(0) })
      },
      (error) => {
        console.log('error', error)
        reject('error ')
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve({ downloadURL })
        })
      }
    )
  })
}

export const fbDeleteImage = async (url) => {
  const storage = getStorage()
  const imageRef = ref(storage, url)
  return await deleteObject(imageRef)
    .then((res) => formatResponse(true, 'IMAGE_DELETED', res))
    .catch((err) => formatResponse(false, 'IMAGE_DELETED_ERROR', err))
}

export const fbUpdateEspacioImage = async ({ espacioId, image: imageRef }) => {
  // TODO update espacio image
  const espacioRef = doc(db, 'espacios', espacioId)
  const espacio = await getDoc(espacioRef)

  if (espacio.exists()) {
    const images = espacio?.data()?.images || []
    const removedImage = images.filter(({ image }) => image !== imageRef.image)
    const findImage = images.find(({ image }) => image === imageRef.image)
    const newImage = { ...findImage, ...imageRef, lastUpdate: Timestamp.now() }
    const newImages = [...removedImage, newImage]
    return updateDoc(espacioRef, { images: newImages })
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }
}

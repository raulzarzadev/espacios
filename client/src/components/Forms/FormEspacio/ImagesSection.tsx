import AddSquare from '@comps/AddSquare'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/Modal'
import {
  addImageToEspacio,
  updateEspacio,
  deleteImageFromEspacio
} from '@fb/espacios'
import { fbDeleteImage, fbUploadImage } from '@fb/images'
import Image from 'next/image'
import { useState, useEffect, useRef, Key } from 'react'

export default function ImagesSection({ espacioId = '', images }) {
  return (
    <section id="images" className="flex  max-w-[90vw] overflow-auto">
      <ModalNewImage espacioId={espacioId} />
      {images?.map((image: any, i: Key) => (
        <ModalDetailsImage image={image} key={i} espacioId={espacioId} />
      ))}
    </section>
  )
}

const ModalDetailsImage = ({ image, espacioId }) => {
  const [modal, setModal] = useState(false)
  const handleOpenModal = () => setModal(!modal)
  const handleEdit = ({ form, espacioId }) => {
    console.log('editing', form)
  }
  const handleDeleteImage = async ({ espacioId, form }) => {
    await deleteImageFromEspacio(espacioId, form.image).then((res) =>
      console.log('res', res)
    )
    await fbDeleteImage(form.image).then((res) => console.log('res', res))
  }
  return (
    <>
      <button
        onClick={handleOpenModal}
        className="relative w-16 min-w-[3rem] h-16 m-1 rounded-lg shadow-lg"
      >
        <Image
          src={image?.image}
          objectFit="cover"
          layout="fill"
          alt="image"
          className="rounded-lg"
        />
      </button>
      <Modal
        title="Detalles de imagen"
        open={modal}
        handleClose={handleOpenModal}
      >
        <FormImage
          espacioId={espacioId}
          image={image}
          saveLabel="Editar"
          handleSave={handleEdit}
          cancelLabel="Borrar"
          handleCancel={handleDeleteImage}
        />
      </Modal>
    </>
  )
}

const ModalNewImage = ({ espacioId = '' }) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }
  const handleSave = async ({ espacioId, form }) => {
    await addImageToEspacio(espacioId, form).then((res) => {})
  }
  const handleCancel = async ({ form }) => {
    form?.image && (await fbDeleteImage(form.image).then((res) => {
    }))
  }

  return (
    <>
      <AddSquare size="md" onClick={handleOpenModal} />
      <Modal
        title="Agregar imagen"
        open={openModal}
        handleClose={handleOpenModal}
      >
        <FormImage
          espacioId={espacioId}
          image={null}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </Modal>
    </>
  )
}

const FormImage = ({
  espacioId,
  image,
  handleSave,
  saveLabel = 'Guardar',
  cancelLabel = 'Cancelar',
  handleCancel = ({ espacioId, form }) => {}
}) => {
  const [form, setForm] = useState({})

  useEffect(() => {
    if (image) {
      setForm(image)
    }
  }, [image])

  const [_image, _setImage] = useState([])
  const [imageProgress, setImageProgress] = useState(0)
  const fileRef = useRef()
  const handleChange = async ({ target }) => {
    if (target.files) {
      const file = target.files[0]
      const fileName = file?.name || 'new-image'
      setForm({ ...form, title: fileName })
      await fbUploadImage({ file, carpet: 'espacios' }, ({ progress }) => {
        setImageProgress(progress)
      }).then((res) => {
        setForm({ ...form, image: res.downloadURL, title: fileName })
        return res
      })
    } else {
      setForm({ ...form, [target.name]: target.value })
    }
  }


  return (
    <div>
      <div className="grid gap-4 p-4">
        {!!imageProgress && (
          <div className="relative">
            <progress
              max={100}
              value={imageProgress}
              className="w-full "
            ></progress>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              {imageProgress}%
            </div>
          </div>
        )}
        {form?.image && (
          <div className="shrink-0 relative aspect-video   ">
            <Image
              src={form?.image}
              objectFit="cover"
              layout="fill"
              alt="preview"
            />
          </div>
        )}
       
        <input
          ref={fileRef}
          type="file"
          name="images"
          onChange={handleChange}
        />
        <Text
          placeholder="Titulo (opcional)"
          fullWidth
          name="title"
          onChange={handleChange}
          value={form?.title}
        />
        <TextArea
          placeholder="Descripción (opcional)"
          rows={2}
          fullWidth
          name="description"
          onChange={handleChange}
          value={form?.description}
        />
        <div className="flex justify-evenly">
          <Button
            label={cancelLabel}
            variant="secondary"
            onClick={() => {
              setForm({})
              setImageProgress(0)
              handleCancel({ espacioId, form })
            }}
          />
          <Button
            label={saveLabel}
            onClick={() => handleSave({ espacioId, form })}
          />
        </div>
      </div>
    </div>
  )
}

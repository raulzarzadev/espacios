import AddSquare from '@comps/AddSquare'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/Modal'
import { addImageToEspacio, deleteImageFromEspacio } from '@fb/espacios'
import { fbDeleteImage, fbUploadImage, fbUpdateEspacioImage } from '@fb/images'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function ImagesSection({ espacioId = '', images = [] }) {
  const imagesSorted = [...images]?.sort((a, b) => b.lastUpdate - a.lastUpdate)
  return (
    <section id="images" className="flex  max-w-[90vw] overflow-auto">
      <ModalNewImage espacioId={espacioId} />
      {imagesSorted?.map((image, i) => (
        <ModalDetailsImage image={image} key={i} espacioId={espacioId} />
      ))}
    </section>
  )
}

// TODO looks like the modal is pointign white a index and not to the image

const ModalDetailsImage = ({ image, espacioId }) => {
  const [modal, setModal] = useState(false)
  const handleOpenModal = () => setModal(!modal)

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
        <FormImage espacioId={espacioId} image={image} />
      </Modal>
    </>
  )
}

const ModalNewImage = ({ espacioId = '' }) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      {!espacioId ? (
        <div>Para agregar imagenes primero debes guardar este espacio</div>
      ) : (
        <AddSquare size="md" onClick={handleOpenModal} />
      )}
      <Modal
        title="Agregar imagen"
        open={openModal}
        handleClose={handleOpenModal}
      >
        <FormImage espacioId={espacioId} image={null} />
      </Modal>
    </>
  )
}

const FormImage = ({ espacioId, image }) => {
  const [status, setStatus] = useState('NEW')
  const [form, setForm] = useState({ image: '' })

  useEffect(() => {
    if (image) {
      setForm(image)
      setStatus('SAVED')
    }
  }, [image])
  // console.log(status)
  // console.log('image', image)
  const [_image, _setImage] = useState([])
  const [imageProgress, setImageProgress] = useState(0)
  const fileRef = useRef()
  const handleChange = async ({ target }) => {
    if (target.files) {
      const file = target?.files[0]
      const fileName = file?.name || 'new-image'
      setForm({ ...form, title: fileName })
      await fbUploadImage({ file, carpet: 'espacios' }, ({ progress }) => {
        setStatus('UPLOADING')
        setImageProgress(progress)
      }).then((res) => {
        const newForm = { ...form, image: res.downloadURL, title: fileName }
        handleSaveImage({ form: newForm, espacioId }).then((res) => {
          setStatus('SAVED')
          // resetForm(500)
        })
        setForm(newForm)

        return res
      })
    } else {
      setForm({ ...form, [target.name]: target.value })
      setStatus('EDIT')
    }
  }

  // ------ MAIN FUNCTIONS ------

  const handleEditImage = async ({ form, espacioId }) => {
    return await fbUpdateEspacioImage({ espacioId, image: form })
  }
  const handleDeleteImage = async ({ espacioId, form }) => {
    await deleteImageFromEspacio(espacioId, form.image).then((res) =>
      console.log('res', res)
    )
    await fbDeleteImage(form.image).then((res) => console.log('res', res))
  }
  const handleSaveImage = async ({ espacioId, form }) => {
    await addImageToEspacio(espacioId, form).then((res) => {})
  }

  const resetForm = (restTime = 500) => {
    setTimeout(() => {
      setImageProgress(0)
      setForm({ title: '', description: '' })
    }, restTime)
  }
  // ------ MAIN FUNCTIONS ------
  // TODO add cancel option when is uploading image

  const BUTTONS_STATUS = {
    NEW: {
      CANCEL: {
        label: 'Cancelar',
        onClick: () => {
          setStatus('DELETED')
          handleDeleteImage({ espacioId, form }).then(() => {
            resetForm()
          })
        },
        disabled: false,
        variant: 'secondary'
      },
      SAVE: {
        label: 'Guardar',
        onClick: () => {
          setStatus('SAVING')
          handleSaveImage({ espacioId, form }).then(() => {
            setStatus('SAVED')
          })
        },
        disabled: true,
        variant: 'primary'
      }
    },
    UPLOADING: {
      CANCEL: {
        label: 'Eliminar',
        onClick: () => {
          setStatus('DELETED')
          handleDeleteImage({ espacioId, form }).then(() => {
            resetForm()
          })
        },
        disabled: true,
        variant: 'secondary'
      },
      SAVE: {
        label: 'Subiendo...',
        onClick: () => {
          setStatus('NEW')
          console.log('form', form)
        },
        disabled: true,
        variant: 'primary'
      }
    },
    UPLOADED: {
      CANCEL: {
        label: 'Eliminar',
        onClick: () => {
          setStatus('DELETED')
          handleDeleteImage({ espacioId, form }).then(() => {
            resetForm()
          })
        },
        disabled: false,
        variant: 'secondary'
      },
      SAVE: {
        label: 'Guardar',
        onClick: () => {
          setStatus('SAVING')
          handleSaveImage({ espacioId, form }).then(() => {
            setStatus('SAVED')
          })
        },
        disabled: false,
        variant: 'primary'
      }
    },

    SAVING: {
      CANCEL: {
        label: 'Cancelar',
        onClick: () => {},
        disabled: true,
        variant: 'secondary'
      },
      SAVE: {
        label: 'Guardando...',
        onClick: () => {},
        disabled: true,
        variant: 'primary'
      }
    },
    SAVED: {
      CANCEL: {
        label: 'Eliminar',
        onClick: () => {
          setStatus('DELETING')
          handleDeleteImage({ espacioId, form }).then(() => {
            setStatus('DELETED')
          })
        },
        disabled: false,
        variant: 'secondary'
      },
      SAVE: {
        label: 'Guardado',
        onClick: () => {},
        disabled: true,
        variant: 'primary'
      }
    },
    EDIT: {
      CANCEL: {
        label: 'Canelar',
        onClick: () => {
          image ? setForm(image) : resetForm()
          setForm({ ...(image || {}) })
          setStatus('SAVED')
        },
        disabled: false,
        variant: 'secondary'
      },
      SAVE: {
        label: 'Editar',
        onClick: () => {
          setStatus('SAVING')
          handleEditImage({ form, espacioId }).then((res) => {
            console.log('res', res)
            setStatus('SAVED')
          })
        },
        disabled: false,
        variant: 'primary'
      }
    },
    DELETED: {
      CANCEL: {
        label: 'Eliminado',
        onClick: () => {},
        disabled: false,
        variant: 'secondary'
      },
      SAVE: {
        label: 'NUEVO',
        onClick: () => {
          resetForm()
        },
        disabled: false,
        variant: 'primary'
      }
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
        {/* TODO disabled when an image exist */}
        <label className="border shadow-lg hover:shadow-none rounded-md text-center px-1 ">
          Seleccionar imagen
          <input
            className=" hidden"
            ref={fileRef}
            type="file"
            name="images"
            onChange={handleChange}
          />
        </label>
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
            onClick={BUTTONS_STATUS?.[status]?.CANCEL?.onClick}
            label={BUTTONS_STATUS?.[status]?.CANCEL?.label}
            disabled={BUTTONS_STATUS?.[status]?.CANCEL?.disabled}
            variant={BUTTONS_STATUS?.[status]?.CANCEL?.variant}
            /* // disabled={saveLabel === 'Guardado'}
            /*  label={saveLabel === 'Guardado' ? 'Eliminar' : 'Cancelar'}
            variant="secondary"
            onClick={() => {
              setForm({})
              setImageProgress(0)
              handleCancel({ espacioId, form })
            }} */
          />
          <Button
            onClick={BUTTONS_STATUS?.[status]?.SAVE?.onClick}
            disabled={BUTTONS_STATUS?.[status]?.SAVE?.disabled}
            label={BUTTONS_STATUS?.[status]?.SAVE?.label}
            variant={BUTTONS_STATUS?.[status]?.SAVE?.variant}
            /*  disabled={saveLabel === 'Guardado'}
            label={saveLabel}
            onClick={() => handleSave({ espacioId, form })} */
          />
        </div>
      </div>
    </div>
  )
}

const FormImage = ({ espacioId, image }) => {
  const [status, setStatus] = useState('NEW')
  const [form, setForm] = useState({ image: '' })

  useEffect(() => {
    if (image) {
      setForm(image)
    }
  }, [image])

  console.log(status)

  const [_image, _setImage] = useState([])
  const [imageProgress, setImageProgress] = useState(0)
  const fileRef = useRef()
  const handleChange = async ({ target }) => {
    if (target.files) {
      const file = target?.files[0]
      const fileName = file?.name || 'new-image'
      setForm({ ...form, title: fileName })
      await fbUploadImage({ file, carpet: 'espacios' }, ({ progress }) => {
        setImageProgress(progress)
      }).then((res) => {
        setStatus('UPLOADED')
        setForm({ ...form, image: res.downloadURL, title: fileName })
        return res
      })
    } else {
      setForm({ ...form, [target.name]: target.value })

      setStatus('EDIT')
    }
  }

  // ------ MAIN FUNCTIONS ------

  const handleEditImage = async ({ form, espacioId }) => {
    console.log('editing', form)
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

  const BUTTONS_STATUS = {
    DELETED: {
      CANCEL: {
        label: 'Eliminado',
        onClick: () => {},
        disabled: false,
        variant: 'secondary'
      },
      SAVE: {
        label: 'NUEVO',
        onClick: () => {},
        disabled: false,
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
    NEW: {
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
    EDIT: {
      CANCEL: {
        label: 'Canelar',
        onClick: () => {
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
          handleEditImage({ form, espacioId }).then(() => {
            setStatus('SAVED')
          })
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

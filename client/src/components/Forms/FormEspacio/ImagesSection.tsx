import AddSquare from '@comps/AddSquare'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/modals'
import axios from 'axios'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ImagesSection({ espacioId = '' }) {
  const [images, setImages] = useState([])
  useEffect(() => {
    // getImages from espacio id
  }, [])
  return (
    <section id="images" className="flex  max-w-[90vw] overflow-auto">
      <ModalNewImage espacioId={espacioId} />
      {images?.map(({ image }, i) => (
        <div
          key={i}
          className="relative w-16 min-w-[3rem] h-16 m-1 rounded-lg shadow-lg"
        >
          <Image
            src={image}
            objectFit="cover"
            layout="fill"
            alt="image"
            className="rounded-lg"
          />
        </div>
      ))}
    </section>
  )
}

const ModalNewImage = ({ espacioId = '' }) => {
  const [form, setForm] = useState({ images: [] })
  const origin = {
    id: espacioId,
    type: 'ESPACIO'
  }
  const handleSaveImages = () => {
    axios.post('/api/images', { ...form, origin })
    console.log(`form`, form)
  }

  const handleChange = ({
    target: { files: images, name, value }
  }: {
    target: any
  }) => {
    if (images) {
      setForm({ ...form, images })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  return (
    <Modal
      OpenComponent={AddSquare}
      openProps={{ size: 'md' }}
      title="Agregar imagen"
      cancelButton
      continueButton="Guardar"
      onContinue={handleSaveImages}
    >
      <div className="grid gap-4 p-4">
        <div>Preview</div>
        <div>
          {/* {form?.images?.map((image) => (
            <div>{console.log(`image`, image)}</div>
          ))} */}
        </div>
        <input
          type="file"
          name="images"
          id=""
          multiple
          onChange={handleChange}
        />
        <Text
          placeholder="Titulo (opcional)"
          fullWidth
          name="title"
          onChange={handleChange}
        />
        <TextArea
          placeholder="Descripción (opcional)"
          rows={2}
          fullWidth
          name="description"
          onChange={handleChange}
        />
      </div>
    </Modal>
  )
}

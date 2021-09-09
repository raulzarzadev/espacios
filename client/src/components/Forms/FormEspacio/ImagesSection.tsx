import AddSquare from '@comps/AddSquare'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/modals'
import Image from 'next/image'
import { useState } from 'react'

export default function ImagesSection({ images = [] }) {
  return (
    <section id="images" className="flex  max-w-[90vw] overflow-auto">
      <ModalNewImage />
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

const ModalNewImage = () => {
  const [form, setForm] = useState({})
  return (
    <Modal
      OpenComponent={AddSquare}
      openProps={{ size: 'md' }}
      title="Agregar imagen"
      cancelButton
      continueButton="Guardar"
      onContinue={() => console.log(form)}
    >
      <div className="grid gap-4 p-4">
        <div>Preview</div>
        <input type="file" name="image" id="" />
        <Text placeholder="Titulo (opcional)" fullWidth />
        <TextArea placeholder="Descripción (opcional)" rows={2} fullWidth />
      </div>
    </Modal>
  )
}

import AddSquare from '@comps/AddSquare'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/modals'
import Image from 'next/image'
import { useState } from 'react'

export default function ContractsSection({ contracts = [] }) {
  return (
    <section id="contracts" className="flex  max-w-[90vw] overflow-auto">
      <ModalNewContract />
      {contracts?.map(({ image }, i) => (
        <div
          key={i}
          className="relative w-16 min-w-[3rem] h-20 m-1 rounded-lg shadow-lg"
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

const ModalNewContract = () => {
  const [form, setForm] = useState({})
  return (
    <Modal
      OpenComponent={AddSquare}
      openProps={{ size: 'tall' }}
      title="Agregar imagen"
      cancelButton
      continueButton="Guardar"
      onContinue={() => console.log(form)}
    >
      <div className="grid gap-4 p-4">
        <div>Preview</div>
        <input type="file" name="image" id="" multiple />
        <Text placeholder="Titulo" fullWidth />
        <TextArea placeholder="Descripción" fullWidth />
      </div>
    </Modal>
  )
}

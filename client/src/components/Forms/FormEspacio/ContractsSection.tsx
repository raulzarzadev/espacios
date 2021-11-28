import AddSquare from '@comps/AddSquare'
import { contractsType } from '@comps/Cards/EspacioCard'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/modals'
import Image from 'next/image'
import { useState } from 'react'

export default function ContractsSection({
  contracts = []
}: {
  contracts: Array<contractsType>
}) {
  return (
    <section id="contracts" className="flex  max-w-[90vw] overflow-auto">
      <ModalNewContract />
      {contracts?.map(({ images }, i) => (
        <div key={i}>
          {images?.map((image, j) => (
            <div
              key={j}
              className="relative w-16 min-w-[3rem] h-20 m-1 rounded-lg shadow-lg"
            >
              <Image
                src={image.href}
                objectFit="cover"
                layout="fill"
                alt="image"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

const ModalNewContract = () => {
  const [form, setForm] = useState({})
  const handleChange = ({ target }: any) => {
    console.log(`target`, target)
  }
  return (
    <Modal
      OpenComponent={AddSquare}
      openProps={{ size: 'tall' }}
      title="Agregar contrato"
      cancelButton
      continueButton="Guardar"
      onContinue={() => console.log(form)}
    >
      <div className="grid gap-4 p-4">
        <div>Preview</div>
        <input type="file" name="image" id="" multiple />
        <Text placeholder="Titulo" fullWidth onChange={handleChange} />
        <TextArea
          placeholder="Descripción"
          fullWidth
          rows={2}
          onChange={handleChange}
        />
      </div>
    </Modal>
  )
}

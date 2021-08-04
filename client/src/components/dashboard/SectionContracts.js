import InputText from '@comps/Inputs/Text'
import Modal from '@comps/Modal'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import ItemCard from './Items/ItemCard'

const SUB_ESPACIOS = [
  {
    id: '1',
    value: '1',
    label: 'Cocina Ch',
    icon: 'home',
    items: ['1', '2', '3'],
    description: 'Descripción de cuarto ',
    category: ['kitchen']
  },
  /*  {
    id: '2',
    value: '2',
    label: 'Cuarto Ind',
    icon: 'room',
    items: ['4', '6', '7', '9'],
    description: 'Descripción de cuarto ',
    category: ['room']
  }, */
  {
    id: '3',
    value: '3',
    label: 'Baño Completo',
    icon: 'kitchen',
    items: ['14', '12', '5', '19', '10'],
    description: 'Descripción label',
    category: ['room']
  }
]
export default function SectionContracts({ list = [], setList = () => {} }) {
  /*  const router = useRouter()
  const [subEspacioSelected, setSubEspacioSelected] = useState('')
  const handleSelectSubEspacio = ({ target: { value } }) => {
    setSubEspacioSelected(value)
  }
  useEffect(() => {
    if (subEspacioSelected === 'new_sub_espacio') {
      router.push('/dashboard/sub-espacios/new')
    }
  }, [subEspacioSelected])
  const addSubEspacio = () => {
    console.log('add')

    const newSubEspacio = SUB_ESPACIOS.find(
      ({ value }) => value === subEspacioSelected
    )
    if (!newSubEspacio) return
    setSubEspacios([...subEspacios, newSubEspacio])
    setSubEspacioSelected('')
  }
  /*
   */
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }
  const [newItem, setNewItem] = useState()
  const addService = () => {
    setList([...list, newItem])
  }
  return (
    <>
      <div className="flex">
        <div className="m-1">
          <ItemCard addCard onClick={handleOpenModal} />
        </div>
        {list.map((item, i) => (
          <div className="m-1" key={i}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
      <Modal
        title="Agregar nuevo contrato"
        open={openModal}
        handleOpen={handleOpenModal}
        handleAccept={addService}
        acceptLabel="Agregar"
        closeLabel="Cancelar"
        handleClose
      >
        <InputText placeholder="Titulo" />
        <InputText placeholder="Fecha" />
        <input type="file" />
        {/*   <select
          className="w-full py-2"
          value={subEspacioSelected}
          onChange={handleSelectSubEspacio}
        >
          <option value="">selecciona sub espacio</option>
          {SUB_ESPACIOS.map(({ label, value }, i) => (
            <option key={`${value}-${i}`} value={value}>
              {label}
            </option>
          ))}
          <option value="new_sub_espacio">nuevo</option>
        </select> */}
      </Modal>
      {/* 
      <div className="mx-3 flex justify-center md:block flex-wrap md:flex-nowrap">
        <div className="w-full my-2 ">
          
        </div>
        <div className="w-full my-2 ">
          <Button block onClick={addSubEspacio}>
            <Icon name="add" size="2x" />
          </Button>
        </div>
      </div> */}
    </>
  )
}

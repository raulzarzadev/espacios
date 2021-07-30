import Modal from '@comps/Modal'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

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
export default function SubEspaciosSection({
  subEspacios = [],
  setSubEspacios = () => {}
}) {
  console.log('subEspacios', subEspacios)
  
  const router = useRouter()
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
  return (
    <>
      <div className="flex">
        <div className="m-1">
          <ItemCard addCard onClick={handleOpenModal} />
        </div>
        {subEspacios.map(({ label, value }, i) => (
          <div className="m-1" key={i}>
            <ItemCard
              item={{
                files: [
                  'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdW1lbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                ],
                title: label,
                description: 'Nuevo contrato firmado con el dueño del lugar'
              }}
            />
          </div>
        ))}
      </div>
      <Modal
        title="Agregar nuevo sub-espacio"
        open={openModal}
        handleOpen={handleOpenModal}
        handleAccept={addSubEspacio}
        acceptLabel="Agregar"
      >
        <select
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
        </select>
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

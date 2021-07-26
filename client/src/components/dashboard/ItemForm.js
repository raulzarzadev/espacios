import Button from '@comps/Button'
import InputText from '@comps/Inputs/Text'
import Input from '@comps/InputText'
import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
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
const ITEMS = [
  {
    id: '1',
    value: '1',
    label: 'estufa',
    category: ['mobile'],
    description: 'descripcion de estufa',
    icon: null
  },
  {
    id: '2',
    value: '2',
    label: 'cuchara',
    category: ['consumible'],
    description: 'descripcion de cuchara',
    icon: null
  },
  {
    id: '3',
    value: '3',
    label: 'jabon de trastes',
    category: ['consumible'],
    description: 'descripcion del jabon de trastes',
    icon: null
  },
  {
    id: '14',
    value: '14',
    label: 'shapoo de cuerpo',
    category: ['consumible'],
    description: 'descripcion del shampo',
    icon: null
  },
  {
    id: '12',
    value: '12',
    label: 'papel sanitario',
    category: ['consumible'],
    description: 'descripcion del papel',
    icon: null
  },
  {
    id: '5',
    value: '5',
    label: 'toalla de manos',
    category: ['linens'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '19',
    value: '19',
    label: 'Espejo',
    category: ['mobil'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '10',
    value: '10',
    label: 'Tapete',
    category: ['linens'],
    description: 'descripcion del toalla de manos',
    icon: null
  }
]

export default function ItemForm({ espacio, handleChange }) {
  const [subEspacioSelected, setSubEspacioSelected] = useState('')
  const [subEspacios, setSubEspacios] = useState([])
  const handleSelectSubEspacio = ({ target: { value } }) => {
    setSubEspacioSelected(value)
  }

  const addSubEspacio = () => {
    const newSubEspacio = SUB_ESPACIOS.find(
      ({ value }) => value === subEspacioSelected
    )
    if (!newSubEspacio) return
    setSubEspacios([...subEspacios, newSubEspacio])
    setSubEspacioSelected('')
  }

  const router = useRouter()

  const handleSaveItemo = () => {
    setTimeout(() => {
      router.back()
    }, 300)
  }

  return (
    <div className=" bg-white m-1 sm:m-4  flex flex-col gap-4 p-4 rounded-md ">
      <h3 className="text-2xl font-bold text-center">Nuevo Item</h3>
      <div className=" max-w-max mx-auto">
        <InputText placeholder="Nombre" />
      </div>
      <div className=" max-w-max mx-auto">
        <InputText placeholder="Categoria" />
      </div>
      <div className=" max-w-max mx-auto">
        <InputText placeholder="Descripción" />
      </div>
      <Button onClick={handleSaveItemo}>Guardar</Button>
    </div>
  )
}

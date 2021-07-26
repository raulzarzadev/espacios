import Button from '@comps/Button'
import Input from '@comps/InputText'
import Icon from '@material-tailwind/react/Icon'
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
  }
]

export default function EspacioForm({ espacio, handleChange }) {
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

  return (
    <div className=" bg-white m-4 flex flex-col gap-4 p-4 rounded-md ">
      <h3 className="text-3xl text-center">Nuevo Espacio</h3>
      <div className="w-96 mx-auto text-center">
        <Input placeholder="Titulo" color="red" />
      </div>
      <div className="w-96 mx-auto text-center">
        <Input placeholder="Sub titulo" color="red" />
      </div>
      <div className="w-96 mx-auto flex flex-col ">
        <h2 className="text-2xl">Sub Espacios </h2>
        <div className="text-center flex flex-wrap my-4">
          {subEspacios.map(({ label, value }, i) => (
            <div className="w-1/2 p-2 " key={`${value}-${i}`}>
              <div className="">{label}</div>
            </div>
          ))}
        </div>
        <div className="mx-3 flex justify-center">
          <select value={subEspacioSelected} onChange={handleSelectSubEspacio}>
            <option value="">selecciona sub espacio</option>
            {SUB_ESPACIOS.map(({ label, value }, i) => (
              <option key={`${value}-${i}`} value={value}>
                {label}
              </option>
            ))}
          </select>
          <div className="mx-3">
            <Button onClick={addSubEspacio}>
              <Icon name="add" size="2x" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto">
        <h2 className="text-2xl ">Inventario</h2>
        <div className="flex flex-wrap">
          {subEspacios.map(({ items, label }, i) => (
            <div className="w-1/4" key={i}>
              <div className="font-bold">{label}</div>
              <div>
                {items.map((item) => (
                  <div key={item}>
                    {ITEMS.find(({ id }) => id === item)?.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-96 mx-auto">
        <h2 className="text-2xl">Contratos </h2>
      </div>
      <div className="w-96 mx-auto">
        <h2 className="text-2xl">Servicios </h2>
      </div>
    </div>
  )
}

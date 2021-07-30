qimport Button from '@comps/Button'
import InputText from '@comps/Inputs/Text'
import Input from '@comps/InputText'
import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Select from '@comps/Inputs/Select'
import ClosingLabel from '@material-tailwind/react/ClosingLabel'
import Label from '@material-tailwind/react/Label'
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
    category: ['mobil', 'kitchen'],
    description: 'descripcion de estufa',
    icon: null
  },
  {
    id: '2',
    value: '2',
    label: 'cuchara',
    category: ['consumible', 'kitchen'],
    description: 'descripcion de cuchara',
    icon: null
  },
  {
    id: '3',
    value: '3',
    label: 'jabon de trastes',
    category: ['consumible', 'kitchen'],
    description: 'descripcion del jabon de trastes',
    icon: null
  },
  {
    id: '14',
    value: '14',
    label: 'shapoo de cuerpo',
    category: ['consumible', 'restroom'],
    description: 'descripcion del shampo',
    icon: null
  },
  {
    id: '12',
    value: '12',
    label: 'papel sanitario',
    category: ['consumible', 'restroom'],
    description: 'descripcion del papel',
    icon: null
  },
  {
    id: '5',
    value: '5',
    label: 'toalla de manos',
    category: ['linens', 'restroom'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '19',
    value: '19',
    label: 'Espejo',
    category: ['mobil', 'restroom'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '10',
    value: '10',
    label: 'Tapete',
    category: ['linens', 'restroom', 'floor'],
    description: 'descripcion del toalla de manos',
    icon: null
  }
]

export default function EspacioForm({ espacio, handleChange }) {
  const router = useRouter()

  const handleSaveSubEspacio = () => {
    setTimeout(() => {
      router.back()
    }, 300)
  }
  const handleToNewItem = () => {
    setTimeout(() => {
      router.push('/dashboard/items/new')
    }, 300)
  }

  const getCategories = ({ items = [] }) => {
    console.log('items', items)

    let res = items.reduce((prev, curr, i, arr) => {
      curr.category.forEach((cat) => {
        if (prev.find(({ value }) => value === cat)) return prev
        return prev.push({ label: cat, value: cat })
      })
      return prev
    }, [])
    return res
  }
  const handleChangeCategory = ({ target }) => {
    setCatergorySelected(target.value)
  }
  const [categories, setCategories] = useState([])
  const [categorySelected, setCatergorySelected] = useState('')
  useEffect(() => {
    setCategories(getCategories({ items: ITEMS }))
  }, [])
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    if (categorySelected === '') {
      setFilteredItems(ITEMS)
    } else {
      const filtered = ITEMS.filter((item) =>
        item.category.includes(categorySelected)
      )
      setFilteredItems(filtered)
    }
  }, [categorySelected])

  const [subEspacioItems, setSubEspacioItems] = useState([])
  console.log('subEspacioItems', subEspacioItems)

  const handleAddItem = (id) => {
    console.log('id', id)
    setSubEspacioItems([...subEspacioItems, id])
  }

  const getItemDetails = (id) => {
    const item = ITEMS.find((item) => item.id === id)
    return item
  }
  const handleRemoveItem = (id) => {
    const itemsCleaned = subEspacioItems.filter((item) => item !== id)
    setSubEspacioItems(itemsCleaned)
  }

  return (
    <div className=" bg-white m-1 sm:m-4  flex flex-col p-4 rounded-md ">
      <h3 className="text-2xl font-bold text-center">Nuevo Sub Espacio</h3>
      <div className="my-4">
        <div className=" max-w-max mx-auto">
          <InputText placeholder="Titulo" />
        </div>
        <div className=" max-w-max mx-auto">
          <InputText placeholder="Descripción" />
        </div>
      </div>
      <div className="mx-auto  max-w-max ">
        <div className="font-bold">Items</div>
        <div className="flex flex-wrap">
          {subEspacioItems.map((itemId, i) => (
            <button key={i} onClick={() => handleRemoveItem(itemId)}>
              <ClosingLabel color="blue" className="m-1">
                {getItemDetails(itemId)?.label}
              </ClosingLabel>
            </button>
          ))}
        </div>
        <div>
          <Select
            label="Categoria"
            onChange={handleChangeCategory}
            options={categories}
            placeholder="Todas"
          />
        </div>
        <div className="flex flex-wrap ">
          {filteredItems.map(({ label, id }) => (
            <button key={id} onClick={() => handleAddItem(id)}>
              <Label className="m-1 md:m-3" color="blue">
                {label}
              </Label>
            </button>
          ))}
        </div>
      </div>
      <div className=" mx-auto my-4">
        <Button onClick={handleToNewItem}>
          <Icon name="add" />
          Item
        </Button>
      </div>
      <Button onClick={handleSaveSubEspacio}>Guardar</Button>
    </div>
  )
}

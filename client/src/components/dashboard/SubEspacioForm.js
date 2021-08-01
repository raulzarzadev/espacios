import Button from '@comps/Button'
import InputText from '@comps/Inputs/Text'
import Input from '@comps/InputText'
import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Select from '@comps/Inputs/Select'
import ClosingLabel from '@material-tailwind/react/ClosingLabel'
import Label from '@material-tailwind/react/Label'
import Modal from '@comps/Modal'
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
const CONSUMIBLE = [
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
  }
]

export default function EspacioForm({ subEspacio, handleChange }) {
  const router = useRouter()
  const [form, setForm] = useState({})
  const [openAddItem, setOpenAddItem] = useState(false)
  const [openAddConsumible, setOpenAddConsumible] = useState(false)

  const handleSaveSubEspacio = () => {
    setTimeout(() => {
      router.back()
    }, 300)
  }

  const handleOpenAddItem = () => {
    setOpenAddItem(!openAddItem)
  }

  const handleOpenAddConsumible = () => {
    setOpenAddConsumible(!openAddConsumible)
  }

  const handleAddItem = (id) => {
    const items = form?.items ? [...form?.items, id] : [id]
    setForm({ ...form, items })
  }
  const handleRemoveItem = (id) => {
    const itemsCleaned = form?.items?.filter((item) => item !== id)
    setForm({ ...form, items: itemsCleaned })
  }

  const handleAddConsumible = (id) => {
    const consumibles = form?.consumibles ? [...form?.consumibles, id] : [id]
    setForm({ ...form, consumibles })
  }
  const handleRemoveConsumible = (id) => {
    const consumiblesCleaned = form?.consumibles?.filter((item) => item !== id)
    setForm({ ...form, consumibles: consumiblesCleaned })
  }

  const getConsumibleDetails = (id) => {
    const consumible = CONSUMIBLE.find((item) => item.id === id)
    return consumible
  }

  const getItemDetails = (id) => {
    const item = ITEMS.find((item) => item.id === id)
    return item
  }

  return (
    <div className=" bg-white m-1 sm:m-4  flex flex-col p-4 rounded-md ">
      <h3 className="text-2xl font-bold text-center">Nuevo Sub Espacio</h3>
      <div className="my-4 ">
        <div className=" max-w-max mx-auto my-2">
          <InputText placeholder="Titulo" />
        </div>
        <div className=" max-w-max mx-auto my-2">
          <InputText placeholder="Descripción" />
        </div>
      </div>
      <div className=" mx-auto my-4 w-full">
        <div className="flex">
          <h3 className="text-3xl mr-2 ">Items</h3>
          <Button onClick={handleOpenAddItem}>
            <Icon name="add" />
          </Button>
        </div>
        <div className="flex flex-wrap my-4">
          {form?.items?.map((itemId, i) => (
            <button key={i} onClick={() => handleRemoveItem(itemId)}>
              <ClosingLabel color="blue" className="m-1">
                {getItemDetails(itemId)?.label}
              </ClosingLabel>
            </button>
          ))}
        </div>
        <AddItemModal
          title="Agregar item"
          open={openAddItem}
          handleOpen={handleOpenAddItem}
          items={ITEMS}
          handleAddItem={handleAddItem}
          redirectTo="/"
        />
      </div>
      <div className=" mx-auto my-4 w-full">
        <div className="flex ">
          <h3 className="text-3xl mr-2 ">Consumible</h3>
          <Button onClick={handleOpenAddConsumible}>
            <Icon name="add" />
          </Button>
        </div>
        <AddItemModal
          title="Agregar consumible"
          open={openAddConsumible}
          handleOpen={handleOpenAddConsumible}
          handleAddItem={handleAddConsumible}
          items={CONSUMIBLE}
          redirectTo="/"
        />
        <div className="flex flex-wrap my-4">
          {form?.consumibles?.map((consumibleId, i) => (
            <button
              key={i}
              onClick={() => handleRemoveConsumible(consumibleId)}
            >
              <ClosingLabel color="blue" className="m-1">
                {getConsumibleDetails(consumibleId)?.label}
              </ClosingLabel>
            </button>
          ))}
        </div>
      </div>
      <Button onClick={handleSaveSubEspacio}>Guardar</Button>
    </div>
  )
}

const AddItemModal = ({
  open,
  handleOpen,
  items = [],
  handleAddItem = () => {},
  title = 'title',
  redirectTo = '/'
}) => {
  const router = useRouter()
  const [categories, setCategories] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [categorySelected, setCatergorySelected] = useState('')

  const getCategories = ({ items = [] }) => {
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
  const handleRedirect = () => {
    router.push(redirectTo)
  }
  useEffect(() => {
    if (categorySelected === '') {
      setFilteredItems(items)
    } else {
      const filtered = items.filter((item) =>
        item.category.includes(categorySelected)
      )
      setFilteredItems(filtered)
    }
  }, [categorySelected, items])

  useEffect(() => {
    setCategories(getCategories({ items }))
  }, [items])

  return (
    <Modal title={title} open={open} handleOpen={handleOpen}>
      <div className="flex justify-center">
        <Select
          label="Categoria"
          onChange={handleChangeCategory}
          options={categories}
          placeholder="Todas"
        />
      </div>
      <div className="flex flex-wrap ">
        {filteredItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => {
              handleAddItem(id)
              handleOpen()
            }}
          >
            <Label className="m-1 md:m-3" color="blue">
              {label}
            </Label>
          </button>
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <Button onClick={handleRedirect}>Agregar nuevo</Button>
      </div>
    </Modal>
  )
}

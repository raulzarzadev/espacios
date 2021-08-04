import Button from '@comps/Button'
import InputText from '@comps/Inputs/Text'
import Input from '@comps/InputTextIcon'
import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Select from '@comps/Inputs/Select'
import ClosingLabel from '@material-tailwind/react/ClosingLabel'
import Label from '@material-tailwind/react/Label'
import Modal from '@comps/Modal'
import axios from 'axios'

export default function SubEspacioForm({
  title = 'Nuevo Sub-Espacio',
  subEspacio
}) {
  const router = useRouter()
  const [form, setForm] = useState({})
  const [openAddItem, setOpenAddItem] = useState(false)
  const [openAddConsumable, setOpenAddConsumable] = useState(false)

  const handleSaveSubEspacio = () => {
    setTimeout(() => {
      router.back()
    }, 300)
  }

  const handleChange = ({ target }) => {
    console.log('target', target.name, target.value)
    
    setForm({ ...form, [target.name]: target.value })
  }

  const handleOpenAddItem = () => {
    setOpenAddItem(!openAddItem)
  }

  const handleOpenAddConsumable = () => {
    setOpenAddConsumable(!openAddConsumable)
  }

  const handleAddItem = (id) => {
    const items = form?.items ? [...form?.items, id] : [id]
    setForm({ ...form, items })
  }
  const handleRemoveItem = (id) => {
    const itemsCleaned = form?.items?.filter((item) => item !== id)
    setForm({ ...form, items: itemsCleaned })
  }

  const handleAddConsumable = (id) => {
    const consumables = form?.consumables ? [...form?.consumables, id] : [id]
    setForm({ ...form, consumables })
  }
  const handleRemoveConsumable = (id) => {
    const consumablesCleaned = form?.consumables?.filter((item) => item !== id)
    setForm({ ...form, consumables: consumablesCleaned })
  }

  const getConsumableDetails = (id) => {
    const consumable = consumables?.find((item) => item.id === id)
    return consumable
  }

  const getItemDetails = (id) => {
    const item = items.find((item) => item.id === id)
    return item
  }

  const [items, setItems] = useState([])

  useEffect(() => {
    if (subEspacio) {
      setForm(subEspacio)
    }
  }, [subEspacio])
  useEffect(() => {
    axios.get('/api/items').then(({ data }) => setItems(data?.items))
  }, [])
  const [consumables, setConsumables] = useState([])
  useEffect(() => {
    axios
      .get('/api/consumables')
      .then(({ data }) => setConsumables(data?.consumables))
  }, [])

  console.log('form', form)
  

  return (
    <div className=" bg-white m-1 sm:m-4  flex flex-col p-4 rounded-md ">
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <div className="my-4 ">
        <div className=" max-w-max mx-auto mt-6">
          <InputText
            onChange={handleChange}
            placeholder="Titulo"
            name="label"
            value={form?.label}
          />
        </div>
        <div className=" max-w-max mx-auto mt-6">
          <InputText
            onChange={handleChange}
            placeholder="Descripción"
            name="description"
            value={form?.description}
          />
        </div>
        <div className=" max-w-max mx-auto mt-6">
          <InputText
            onChange={handleChange}
            placeholder="Categoria"
            name="categories"
            
          />
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
          items={items}
          handleAddItem={handleAddItem}
          redirectTo="/"
        />
      </div>
      <div className=" mx-auto my-4 w-full">
        <div className="flex ">
          <h3 className="text-3xl mr-2 ">Consumable</h3>
          <Button onClick={handleOpenAddConsumable}>
            <Icon name="add" />
          </Button>
        </div>
        <AddItemModal
          title="Agregar consumable"
          open={openAddConsumable}
          handleOpen={handleOpenAddConsumable}
          handleAddItem={handleAddConsumable}
          items={consumables}
          redirectTo="/"
        />
        <div className="flex flex-wrap my-4">
          {form?.consumables?.map((consumableId, i) => (
            <button
              key={i}
              onClick={() => handleRemoveConsumable(consumableId)}
            >
              <ClosingLabel color="blue" className="m-1">
                {getConsumableDetails(consumableId)?.label}
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
      <div className="flex justify-center mt-4">
        <Button onClick={handleRedirect}>Agregar nuevo</Button>
      </div>
    </Modal>
  )
}

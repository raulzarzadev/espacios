import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter2'
import Text from '@comps/inputs/Text'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import uid from 'src/utils/uid'
const schema = yup.object().shape({
  name: yup.string().required()
})

export default function FormArea({ espacio, area, handleAddArea }) {
  const [items, setItems] = useState(area?.items || [])
  const [itemName, setItemName] = useState('')
  const [defaultValues, setDefaultValues] = useState(undefined)

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { isDirty, errors }
  } = useForm({ resolver: yupResolver(schema), defaultValues: area })

  const handleAddItem = () => {
    setItemName('')
    setItems([...items, { name: itemName, quantity: 1, id: `i-${uid()}` }])
  }

  const handleRemoveItem = (index) => {
    items.splice(index, 1)
    setItems([...items])
  }

  const handleChangeQuantity = (index, value) => {
    items[index].quantity = parseInt(value)
    setItems([...items])
  }

  const handleChangeItem = ({ target: { value } }) => {
    setItemName(value)
  }
  const onSubmit = (data) => {
    const id = uid()
    const newArea = { id, ...data, items }
    handleAddArea(newArea, { alreadyExist: !!area, id: area?.id || null })
    if (!area) {
      setItems([])
      setValue('name', '')
    }
  }

  const sortAreas = (a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  }

  return (
    <div className="">
      <div className="flex flex-col max-w-full">
        <div className="font-thin">Espacio:</div>
        <h4 className="text-center my-2  text-xl"> {espacio?.name}</h4>
        <Text
          errorText={errors?.name?.message && 'Nombre de área es necesario'}
          {...register('name')}
          fullWidth
          placeholder="Nombre del area"
          label="Nombre del area"
          //  onChange={handleChangeName}
        />
        <div className="mx-auto py-3 w-full max-w-full">
          <div>
            <Text
              value={itemName}
              placeholder="nuevo item"
              label="Nuevo item"
              onChange={handleChangeItem}
            />
            <div className="flex justify-center items-center my-1">
              <Button
                disabled={!itemName}
                onClick={handleAddItem}
                size="xs"
                variant="third"
                iconOnly
                icon={
                  <div className="flex px-2">
                    Agregar item
                    <Icon name="plus" />
                  </div>
                }
              />
            </div>
          </div>
          <h3 className="h3 py-3 font-thin">Lista de items:</h3>
          {items.sort(sortAreas).map((item, i) => (
            <ItemRow
              key={i}
              index={i}
              item={item}
              handleRemoveItem={handleRemoveItem}
              handleChangeQuantity={handleChangeQuantity}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Button label="Agregar" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  )
}

const ItemRow = ({ item, handleRemoveItem, handleChangeQuantity, index }) => {
  return (
    <div className="flex w-full py-1  ">
      <div className="w-1/6">
        <Button
          size="xs"
          variant="secondary"
          iconOnly
          icon={<Icon name="minus" />}
          onClick={() => handleRemoveItem(index)}
        />
      </div>
      <div className="w-4/6 truncate ">{item.name}</div>
      <div className="w-1/6">
        <Counter
          value={item.quantity}
          onChange={({ target: { value } }) =>
            handleChangeQuantity(index, value)
          }
        />
      </div>
    </div>
  )
}

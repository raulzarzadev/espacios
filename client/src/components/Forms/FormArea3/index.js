import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter2'
import Text from '@comps/inputs/Text'
import Modal from '@comps/modals'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const schema = yup.object().shape({
  name: yup.string().required()
})

export default function FormArea({ espacio, area, handleAddArea }) {
  const [items, setItems] = useState(area?.items || [])
  const [itemName, setItemName] = useState('')
  const {
    handleSubmit,
    register,
    watch,
    formState: { isDirty, errors }
  } = useForm({ resolver: yupResolver(schema), defaultValues: area })
  console.log(`watch()`, watch(), area)

  const handleAddItem = () => {
    setItemName('')
    setItems([...items, { name: itemName, quantity: 1 }])
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
    const newArea = { ...data, items }
    console.log(`data`, newArea)
    handleAddArea(newArea)
  }

  return (
    <div className="">
      <Modal
        OpenComponent={Button}
        openProps={{ label: 'Agregar area' }}
        title="Agregar area"
      >
        <div className="flex flex-col max-w-full">
          <div className="font-thin">Agregar área a:</div>
          <h4 className="text-center my-2  text-xl"> {espacio.name}</h4>
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
            {items.map((item, i) => (
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
            <Button label="Agregar area" onClick={handleSubmit(onSubmit)} />
          </div>
        </div>
      </Modal>
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

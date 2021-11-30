import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter2'
import Text from '@comps/inputs/Text'
import Modal from '@comps/modals'
import { useState } from 'react'

export default function FormArea({ espacio }) {
  /* 
  {
    espacio:{
      id: 
      name:
    },
    areas:[
      {
        name,
        items:[
          {
            name
            quantity
          }
        ]
      }
    ]
    
  }
  */

  const [newArea, setNewArea] = useState({ name: '', items: [] })
  const handleChangeName = ({ target: { value } }) => {
    setNewArea({ ...newArea, name: value })
  }
  const handleAddItem = () => {
    setNewArea({
      ...newArea,
      items: [...newArea?.items, { name: '', quantity: 1 }]
    })
  }

  const handleRemoveItem = (index) => {
    newArea.items.splice(index, 1)
    setNewArea({ ...newArea })
  }
  const handleChangeItem = (index, value) => {
    newArea.items[index].name = value
    setNewArea({ ...newArea })
  }
  const handleChangeQuantity = (index, value) => {
    newArea.items[index].quantity = value
    setNewArea({ ...newArea })
  }

  console.log(`newArea`, newArea)

  return (
    <div className="">
      <Modal
        OpenComponent={Button}
        openProps={{ label: 'Agregar area' }}
        title="Agregar area"
      >
        <div className="grid items">
          <h4 className="text-center">Agregar area a: {espacio.name}</h4>
          <Text
            fullWidth
            placeholder="Nombre del area"
            label="Nombre del area"
            onChange={handleChangeName}
          />
          
          {newArea?.items?.map((item, i) => (
            <ItemRow
              key={i}
              item={item}
              index={i}
              handleRemoveItem={handleRemoveItem}
              handleChangeItem={handleChangeItem}
              handleChangeQuantity={handleChangeQuantity}
            />
          ))}

          <div className="flex justify-center items-center">
            <Button
              onClick={handleAddItem}
              size="xs"
              variant="third"
              iconOnly
              icon={<Icon name="plus" />}
            />
            Item
          </div>
          <div className="flex justify-center mt-4">
            <Button label="Agregar area" />
          </div>
        </div>
      </Modal>
    </div>
  )
}

const ItemRow = ({
  item,
  index,
  handleRemoveItem,
  handleChangeItem,
  handleChangeQuantity
}) => {
  return (
    <div className="">
      <div
        className="grid grid-flow-col gap-2 items-center my-2  "
        key={`${item.name}-${index}`}
      >
        <Button
          size="xs"
          variant="secondary"
          iconOnly
          icon={<Icon name="minus" />}
          onClick={() => handleRemoveItem(index)}
        />
        <Text
          value={item.name}
          placeholder="item"
          onChange={({ target: { value } }) => handleChangeItem(index, value)}
        />
        <div>
          <Counter
            value={item.quantity}
            onChange={({ target: { value } }) =>
              handleChangeQuantity(index, value)
            }
          />
        </div>
      </div>
    </div>
  )
}

import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter2'
import Text from '@comps/inputs/Text'
import Modal from '@comps/modals'
import NewArea from 'pages/areas/new'
import { useState, useEffect } from 'react'

export default function FormArea({ espacio }) {
  const [newArea, setNewArea] = useState({ name: '', items: [] })
  const [items, setItems] = useState([])

  const handleChangeName = ({ target: { value } }) => {
    setNewArea({ ...newArea, name: value })
  }

  const handleAddItem = () => {
    const id = new Date().getTime().toString()
    const newItem = { id, name: '', quantity: 1 }
    setItems([...items, newItem])
  }

  const handleRemoveItem = (itemId) => {}
  const handleChangeItem = (itemId, name) => {
    const newItem = items.find(({ id }) => itemId === id)
    newItem.name = name
    const listClenad = items.filter(({id})=>id!==itemId)
    set()
  }
  const handleChangeQuantity = (itemId, quantity) => {}

  const handleSetItems = () => {
    console.log(`save`, { ...newArea, items })
  }
  console.log(`items`, items)
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

          {items.map((item, i) => (
            <div key={i}>
              <ItemRow
                item={item}
                handleRemoveItem={handleRemoveItem}
                handleChangeItem={handleChangeItem}
                handleChangeQuantity={handleChangeQuantity}
              />
            </div>
          ))}

          {/*  {newArea?.items?.map((item, i) => (
            <ItemRow
              key={i}
              item={item}
              index={i}
              handleRemoveItem={handleRemoveItem}
              handleChangeItem={handleChangeItem}
              handleChangeQuantity={handleChangeQuantity}
            />
          ))}
 */}
          <div className="flex justify-center items-center">
            <Button
              onClick={() => handleAddItem()}
              size="xs"
              variant="third"
              iconOnly
              icon={<Icon name="plus" />}
            />
            Item
          </div>
          <div className="flex justify-center mt-4">
            <Button label="Agregar area" onClick={handleSetItems} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

const ItemRow = ({
  item,
  handleRemoveItem,
  handleChangeItem,
  handleChangeQuantity
}) => {
  return (
    <div className="">
      <div
        className="grid grid-flow-col gap-2 items-center my-2  "
        key={`${item?.name}-${item?.id}`}
      >
        <Button
          size="xs"
          variant="secondary"
          iconOnly
          icon={<Icon name="minus" />}
          onClick={() => handleRemoveItem(item.id)}
        />
        <input
          type="text"
          value={item?.name}
          placeholder="item"
          onChange={({ target: { value } }) => handleChangeItem(item.id, value)}
        />
        <div>
          <Counter
            value={item?.quantity}
            onChange={({ target: { value } }) =>
              handleChangeQuantity(item.id, value)
            }
          />
        </div>
      </div>
    </div>
  )
}

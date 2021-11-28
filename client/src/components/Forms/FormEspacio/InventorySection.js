import Icon from '@comps/Icon'
import ICON_LIST from '@comps/Icon/icon-list'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter2'
import { useState, useEffect } from 'react'
export default function InventorySection({ areas = [], espacioId = '' }) {
  console.log(`areas`, areas)

  return (
    <div className="">
      <div className="flex ">
        <div className="w-6/12 flex justify-center">Item</div>
        <div className="w-6/12 flex flex-col items-center justify-center">
          Cantidades
          <div className="flex justify-between w-full text-xs ">
            <div className="w-1/4 truncate">esperada</div>
            <div className="w-1/6 truncate">ultima</div>
            <div className="w-1/4 truncate">actual</div>
            <div className="w-1/4 truncate">guardar</div>
          </div>
        </div>
      </div>
      {areas?.map((area, i) => (
        <div key={i}>
          <div className=" flex ">
            <div className="font-bold w-6/12 ">
              {area?.name}{' '}
              <span className="font-normal text-sm">x{area?.quantity}</span>{' '}
            </div>
          </div>
          <div>
            {area?.items?.map((item, i) => (
              <div key={i} className="flex justify-between ">
                <div className="w-6/12 flex items-center  justify-start text-sm">
                  {item?.name}
                </div>
                <div className="w-1/12 flex items-center justify-center">
                  {item?.quantity * area?.quantity}
                </div>
                <Inventory itemId={item.id} espacioId={espacioId} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const Inventory = ({ itemId, espacioId }) => {
  const [form, setForm] = useState(undefined)
  const hanldeSetInventori = ({ itemId, value }) => {
    setForm({ ...form, [itemId]: value })
  }
  const handleSaveInventory = () => {
    console.log(`espacioId`, espacioId)
    console.log(`form`, form)
    setForm(undefined)
  }
  return (
    <>
      <div className="w-1/12 flex items-center justify-center">0</div>
      <div className="w-2/12 flex justify-center items-center">
        <Counter
        
          onChange={({ target: { value } }) =>
            hanldeSetInventori({ itemId, value })
          }
        />
      </div>
      <div className="flex justify-center items-center w-/12 ">
        <Button
          disabled={!form}
          size="xs"
          iconOnly
          icon={<Icon name="save" />}
          label="Guardar inventario"
          onClick={handleSaveInventory}
        />
      </div>
    </>
  )
}

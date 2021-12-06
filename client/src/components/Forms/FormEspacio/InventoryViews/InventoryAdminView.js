import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter'
import { useRouter } from 'next/router'
import ROUTES from 'src/CONSTANTS/ROUTES'
import { useEffect, useState } from 'react'
import { getLastInventory } from '@fb/inventaries'
import { fromNow } from 'src/utils/dates'
export default function InventoryAdminView({
  espacio: { areas = [], name, id }
}) {
  const router = useRouter()

  return (
    <div className="">
     
      <div className="flex items-center">
        <div className="w-6/12 flex justify-center">Item</div>
        <div className="w-6/12 flex flex-col items-center justify-center">
          Cantidades
        </div>
      </div>
      {areas?.map((area, i) => (
        <AreaRow key={i} area={area} espacio={{ name, id }} />
      ))}
    </div>
  )
}
const AreaRow = ({ area, espacio }) => {
  return (
    <div>
      <div className=" flex ">
        <div className="font-bold w-full  flex">
          <div className="w-full">
            {area?.name}
            <span className=" text-sm">x{area?.quantity}</span>{' '}
          </div>
          <div className=" font-normal text-center flex justify-between w-full text-xs items-center ">
            <div className="w-full  truncate ">ult. hace</div>
            <div className="w-full  truncate ">actual</div>
            <div className="w-full  truncate ">ideal</div>
            <div className="w-full  truncate ">falta</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        {area?.items?.map((item, i) => (
          <ItemRow item={item} key={i} area={area} espacio={espacio} />
        ))}
      </div>
    </div>
  )
}

const ItemRow = ({ item, area, espacio }) => {
  const [lastUpdate, setLastUpdate] = useState(undefined)
  useEffect(() => {
    getLastInventory(
      {
        itemId: item.id,
        espacioId: espacio.id,
        areaId: area.id
      },
      setLastUpdate
    )
    return () => {
      setLastUpdate(undefined)
    }
  }, [area.id, espacio.id, item.id])
  const currentCount = lastUpdate?.item?.quantity || 0
  const idealCount = item?.quantity * area?.quantity
  const restToIdeal = idealCount - currentCount
  return (
    <div className=" flex justify-between ">
      <div className="pl-2 w-8/12 flex items-center  justify-start text-sm">
        {item?.name}
      </div>
      <div className="w-1/6  flex items-center justify-center font-normal italic text-xs">
        <span className="truncate max-w-full">
          {lastUpdate ? fromNow(lastUpdate?.createdAt) : 'nunca'}
        </span>
      </div>
      <div className="w-1/6 flex items-center justify-center">
        {currentCount}
      </div>
      <div className="w-1/6  flex items-center justify-center">
        {idealCount}
      </div>
      <div className="w-1/6 flex items-center justify-center">
        {restToIdeal}
      </div>
    </div>
  )
}

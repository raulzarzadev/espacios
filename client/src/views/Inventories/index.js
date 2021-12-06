import Button from '@comps/inputs/Button'
import { useRouter } from 'next/router'
import ROUTES from 'src/CONSTANTS/ROUTES'
import { useState, useEffect } from 'react'
import { getInventoryByEspacio } from '@fb/inventaries'
import { fromNow } from 'src/utils/dates'

export default function EspacioInventories() {
  const router = useRouter()
  const espacioId = router.query.id
  const [inventories, setInventories] = useState(undefined)
  useEffect(() => {
    if (espacioId) getInventoryByEspacio({ espacioId }, setInventories)
  }, [espacioId])
  return (
    <div className="">
      <div className="text-center my-4">
        <Button
          label="Nuevo inventario"
          onClick={() =>
            router.push(ROUTES.espacios.inventories(espacioId).new)
          }
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl ">Lista de inventarios</h3>
        {!!!inventories?.length && 'Aun no hay inventarios'}
      </div>
      <div className="flex flex-col max-w-lg mx-auto">
        {inventories?.map((inventory, i) => (
          <InventoryRow key={i} inventory={inventory} />
        ))}
      </div>
    </div>
  )
}
const InventoryRow = ({ inventory: { createdAt, item, area } }) => {
  return (
    <div className="border flex rounded-lg shadow-lg my-1  flex-wrap">
      <div className="w-full">{area.name}</div>
      <div className="w-1/3">{item.name}</div>
      <div className="w-1/3">{item.quantity}</div>
      <div className="w-1/3">{fromNow(createdAt)}</div>
    </div>
  )
}

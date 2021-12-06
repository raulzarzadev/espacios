import Button from '@comps/inputs/Button'
import { useRouter } from 'next/router'
import ROUTES from 'src/CONSTANTS/ROUTES'
import { useState, useEffect } from 'react'
import { getInventoryByEspacio } from '@fb/inventaries'
import { fromNow } from 'src/utils/dates'
import InventoryAdminView from '@comps/Forms/FormEspacio/InventoryViews/InventoryAdminView'
import { useSelector } from 'react-redux'

export default function EspacioInventories() {
  const router = useRouter()
  const espacioId = router.query.id
  const { espacio } = useSelector((state) => state.espacio)
  console.log(`espacio`, espacio)
  useEffect(() => {
    if (!espacio && espacioId) {
      router.push(ROUTES.espacios.details(espacioId))
    }
  }, [espacio, espacioId, router])
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
        <h3 className="text-2xl ">Estado del inventario</h3>
      </div>
      <div className="flex flex-col max-w-lg mx-auto">
        {espacio && <InventoryAdminView espacio={espacio} />}
      </div>
    </div>
  )
}

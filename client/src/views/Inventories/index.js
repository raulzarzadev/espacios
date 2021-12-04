import Button from '@comps/inputs/Button'
import { useRouter } from 'next/router'
import ROUTES from 'src/CONSTANTS/ROUTES'

export default function EspacioInventories() {

  const router = useRouter()
  return (
    <div className="">
      <div className="text-center my-4">
        <Button
          label="Nuevo inventario"
          onClick={() =>
            router.push(ROUTES.espacios.inventories(router.query.id).new)
          }
        />
      </div>
      Lista de inventarios por espacio
      {`${router.query.id}`}
    </div>
  )
}

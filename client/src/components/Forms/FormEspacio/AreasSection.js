import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter'
import Modal from '@comps/modals'
import { getAdminAreas } from '@fb/areas'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ROUTES from 'src/CONSTANTS/ROUTES'
export default function AreasSection({
  espaciosAreas = [],
  setEspaciosAreas = () => {}
}) {
  const router = useRouter()
  const [areas, setAreas] = useState([])
  const { user } = useSelector((state) => state.user)
  useEffect(() => {
    if (user) {
      getAdminAreas(user?.id, setAreas)
    }
  }, [user])
  console.log(`areas`, areas)
  return (
    <div className="w-full">
      <div>
        {espaciosAreas.map((area, i) => (
          <div className="my-2" key={i}>
            <label className="flex w-full justify-between">
              {area?.name}
              <Counter />
            </label>
          </div>
        ))}

        <div className="flex w-full justify-center my-4">
          <Modal
            title="Agregar area"
            OpenComponent={Button}
            openProps={{ label: 'Agregar area', variant: 'outlined' }}
          >
            <div className="flex flex-col justify-center items-center">
              <div>Todas las areas</div>
              <div>
                {areas.map((area) => (
                  <div key={area?.id}>{area?.name}</div>
                ))}
              </div>
              <div className="grid grid-flow-col gap-5 pt-5">
                <Button
                  size="sm"
                  label="Nueva area"
                  variant="outlined"
                  onClick={() => router.push(ROUTES.areas.new())}
                />
                <Button size="sm" label="Agregar area" />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

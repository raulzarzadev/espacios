import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter'
import Modal from '@comps/modals'
import { getAdminAreas } from '@fb/areas'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ROUTES from 'src/CONSTANTS/ROUTES'
import FormAddItem from '../FormAddItem'
export default function AreasSection({areas, setAreas}) {
  const [allAreas, setAllAreas] = useState([])
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      getAdminAreas(user?.id, setAllAreas)
    }
  }, [user])
  const handleSetAareas = (areas) => {
    setAreas(areas)
  }

  return (
    <div className="w-full">
      <div>
        <FormAddItem
          options={{
            modalTitle: 'Agregar areas',
            modalOpenLabel: 'Agregar areas',
            selectedTitle: 'Areas',
            addNewRoute: ROUTES.areas.new()
          }}
          selectables={allAreas}
          selected={areas}
          setSelected={handleSetAareas}
        />
      </div>
    </div>
  )
}

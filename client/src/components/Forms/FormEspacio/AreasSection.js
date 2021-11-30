import { getAdminAreas } from '@fb/areas'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ROUTES from 'src/CONSTANTS/ROUTES'
import FormAddItem from '../FormAddItem'
import FormArea from '../FormArea2'
export default function AreasSection({areas, setAreas, espacio}) {
  const [allAreas, setAllAreas] = useState([])
  const { user } = useSelector((state) => state?.user)

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
       <FormArea espacio={espacio}/>
      </div>
    </div>
  )
}

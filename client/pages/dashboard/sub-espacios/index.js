
import SubEspaciosCard from '@comps/dashboard/SubEspaciosCard'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
export default function SubEspacios() {
  const router = useRouter()
  const handleEspacioClick = (id) => {
    router.push(`/dashboard/sub-espacios/${id}`)
  }
  const [espacios, setEspacios] = useState([])
  useEffect(() => {
    axios.get('/api/sub-espacios').then(({ data }) => setEspacios(data?.subEspacios))
  }, [])
  return (
    <>
      <h3 className="text-white text-3xl text-center p-6">Espacios</h3>
      <div className="flex flex-col items-center py-6">
        {espacios?.map((espacio) => (
          <div key={espacio?.id} >
            <SubEspaciosCard espacio={espacio} onClick={handleEspacioClick} />
          </div>
        ))}
      </div>
    </>
  )
}

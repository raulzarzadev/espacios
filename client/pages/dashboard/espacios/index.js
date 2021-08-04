import EspaciosCard from '@comps/dashboard/Espacios/EspaciosCard'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
export default function Espacios() {
  const router = useRouter()
  const handleEspacioClick = (id) => {
    router.push(`/dashboard/espacios/${id}`)
  }
  const [espacios, setEspacios] = useState([])
  useEffect(() => {
    axios.get('/api/espacios').then(({ data }) => setEspacios(data?.espacios))
  }, [])
  return (
    <>
      <h3 className="text-white text-3xl text-center p-6">Espacios</h3>
      <div className="flex flex-col items-center py-6">
        {espacios.map((espacio) => (
          <div key={espacio?.id} >
            <EspaciosCard espacio={espacio} onClick={handleEspacioClick} />
          </div>
        ))}
      </div>
    </>
  )
}

import EspaciosCard from '@comps/dashboard/EspaciosCard'
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
      <div className="flex flex-col gap-2 p-2 py-8">
        {espacios.map((espacio) => (
          <EspaciosCard
            key={espacio?.id}
            espacio={espacio}
            onClick={handleEspacioClick}
          />
        ))}
      </div>
    </>
  )
}

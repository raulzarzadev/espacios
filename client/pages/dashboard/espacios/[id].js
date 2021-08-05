import EspacioForm from '@comps/dashboard/Espacios/EspacioForm'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

export default function Espacios() {
  const {
    query: { id }
  } = useRouter()

  const [espacio, setEspacio] = useState({})
  useEffect(() => {
    axios.get(`/api/espacios/${id}`).then(({ data }) => setEspacio(data))
  }, [id])
  return (
    <>
      <EspacioForm espacio={espacio} title="Detalles" />
    </>
  )
}

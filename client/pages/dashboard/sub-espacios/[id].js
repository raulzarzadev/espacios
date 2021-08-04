import SubEspacioForm from '@comps/dashboard/SubEspacioForm'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

export default function Espacios() {
  const {
    query: { id }
  } = useRouter()

  const [espacio, setEspacio] = useState({})
  useEffect(() => {
    axios.get(`/api/sub-espacios/${id}`).then(({ data }) => setEspacio(data))
  }, [id])
  return (
    <>
      <SubEspacioForm espacio={espacio} title="Detalles" />
    </>
  )
}

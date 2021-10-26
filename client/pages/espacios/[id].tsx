import { espacioType } from '@comps/Cards/EspacioCard'
import FormEspacio from '@comps/Forms/FormEspacio'
import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import useAxios from 'src/hooks/useAxios'

export default function EspacioPage() {
  const router = useRouter()
  const {
    query: { id }
  } = router
  const [espacio, setEspacio] = useState<espacioType | null>(null)

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/espacios/${id}`)
        .then((res) => setEspacio(res.data))
        .catch((err) => console.log(err))
    }
  }, [id])

  return (
    <div className="">
      <Head title="Detalles | Espacio" />
      <RouteType type="private">
        {espacio ? (
          <FormEspacio
            formTitle="Detalles de casa-123"
            alreadyExist
            espacio={espacio}
          />
        ) : (
          <div>Loading...</div>
        )}
      </RouteType>
    </div>
  )
}

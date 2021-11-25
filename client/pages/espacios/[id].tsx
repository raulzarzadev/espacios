import { espacioType } from '@comps/Cards/EspacioCard'
import FormEspacio from '@comps/Forms/FormEspacio'
import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import { getAdminEspacio } from '@fb/espacios'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import useAxios from 'src/hooks/useAxios'

export default function EspacioPage() {
  const router = useRouter()
  const {
    query: { id }
  } = router

  const { user } = useSelector((state): RootState => state.user)
  const [espacio, setEspacio] = useState(undefined)

  useEffect(() => {
    console.log(`user.id`, user?.id)
    getAdminEspacio(user?.id, id, setEspacio)
  }, [])
  console.log(`espacio`, espacio)

  if (espacio === undefined) return 'Cargando ...'

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

import FormEspacio from '@comps/Forms/FormEspacio'
import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import { listenEspacio } from '@fb/espacios'
import { setEspacioState } from '@redux/espacios/EspaciosSlice'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function EspacioPage() {
  const router = useRouter()
  const {
    query: { id }
  } = router

  const { user } = useSelector((state: RootState) => state.user)
  const [espacio, setEspacio] = useState(undefined)
  useEffect(() => {
    if (user?.id) {
      listenEspacio(id, setEspacio)
    }
  }, [id, user])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setEspacioState(espacio))
  }, [dispatch, espacio])

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

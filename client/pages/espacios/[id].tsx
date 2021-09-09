import { espacioType } from '@comps/Cards/EspacioCard'
import FormEspacio from '@comps/Forms/FormEspacio'
import Head from '@comps/Head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import useAxios from 'src/hooks/useAxios'

export default function EspacioPage() {
  const router = useRouter()
  const {
    query: { id }
  } = router
  const { response, loading, error } = useAxios({ url: `/api/espacios/${id}` })
  const [espacio, setEspacio] = useState<espacioType | null>(null)

  useEffect(() => {
    if (response) {
      setEspacio(response)
    }
  }, [id, response])

  return (
    <div className="">
      <Head title="Detalles | Espacio" />
      <div className="max-w-lg mx-auto">
        <FormEspacio
          formTitle="Detalles de casa-123"
          alreadyExist
          espacio={espacio}
        />
      </div>
    </div>
  )
}

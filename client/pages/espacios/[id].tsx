import FormEspacio from '@comps/Forms/FormEspacio'
import Head from '@comps/Head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { testImage } from 'src/assets/images'
const IMAGES = [
  { image: testImage },
  { image: testImage },
  { image: testImage },
  { image: testImage },
  { image: testImage },
  { image: testImage },
  { image: testImage },
  { image: testImage },
  { image: testImage }
]
const CONTRACTS = [{ title: 'renta 2021' }, { title: 'Admin 2019' }]
export default function EspacioPage() {
  const router = useRouter()
  const [espacio, setEspacio] = useState({})
  const {
    query: { id }
  } = router

  useEffect(() => {
    //get espacio id
    console.log(id)
    setEspacio({
      id,
      title: `Espacio-${id}`,
      contracts: CONTRACTS,
      images: IMAGES
    })
  }, [id])
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

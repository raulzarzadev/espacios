import Counter from '@comps/inputs/Counter2'
import { getAdminEspacio } from '@fb/espacios'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import FormTitleAndButton from '@comps/FormTitleAndButton'

export default function InventoryByEspacio() {
  const router = useRouter()
  const espacioId = router.query.id
  const state = useSelector((state) => state?.espacio)
  const [espacio, setEspacio] = useState(undefined)
  useEffect(() => {
    if (!state.espacio && espacioId) {
      getAdminEspacio('', espacioId, setEspacio)
    }
  }, [state, espacioId])
  
  const handleSaveInventary=()=>{
    console.log(`object`)
  }

  if (espacio === undefined) return 'Cargando ...'
  return (
    <div className="">
      <div className="max-w-sm mx-auto">
        <FormTitleAndButton onClick={handleSaveInventary} label="Guardar " title={`${espacio.name}`} />
        <h3 className="font-bold text-center my-2"> Nuevo inventario</h3>
        <div>
          {espacio.areas.map((area, i) => (
            <AreaRow area={area} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
const AreaRow = ({ area }) => {
  return (
    <div className="">
      <div className=" flex ">
        <div className="font-bold w-full  flex">
          <div className="w-full">
            {area?.name}
            <span className=" text-sm font-thin"> x{area?.quantity}</span>{' '}
          </div>
          <div className=" font-normal text-center flex justify-between w-full text-xs items-center ">
            <div className="w-full  truncate ">Conteo</div>
            <div className="w-full  truncate ">Listo</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        {area?.items?.map((item, i) => (
          <div key={i} className=" flex justify-between ">
            <div className="pl-2 w-8/12 flex items-center  justify-start text-sm">
              {item?.name}
            </div>
            <div className="w-1/3  flex items-center justify-center">
              <Counter />
            </div>
            <div className="w-1/3 flex items-center justify-center">
             <input type='checkbox'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import Counter from '@comps/inputs/Counter2'
import { getAdminEspacio } from '@fb/espacios'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import FormTitleAndButton from '@comps/FormTitleAndButton'
import uid from 'src/utils/uid'
import Button from '@comps/inputs/Button'
import Icon from '@comps/Icon'
import { getLastInventory, newInventory } from '@fb/inventaries'
import useAuth from 'src/hooks/useAuth'
import { fromNow } from 'src/utils/dates'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
export default function InventoryByEspacio() {
  const router = useRouter()
  const espacioId = router.query.id
  const state = useSelector((state) => state?.espacio)
  const [espacio, setEspacio] = useState(undefined)
  useEffect(() => {
    if (!state.espacio && espacioId) {
      getAdminEspacio('', espacioId, setEspacio)
    } else {
      setEspacio(state.espacio)
    }
  }, [espacioId])

  if (espacio === undefined) return 'Cargando ...'
  console.log(`espacio`, espacio)
  return (
    <div className="">
      <div className="max-w-sm mx-auto">
        <FormTitleAndButton hiddeButton title={`${espacio.name}`} />
        <div className="text-center">
          <h3 className="font-bold  my-2 "> Nuevo inventario</h3>
          {!!!espacio?.areas?.length && 'Aun no hay areas. '}
        </div>
        <div>
          {espacio?.areas?.map((area, i) => (
            <AreaRow area={area} key={i} espacio={espacio} />
          ))}
        </div>
      </div>
    </div>
  )
}

const AreaRow = ({ area, espacio }) => {
  return (
    <div className="">
      <div className=" flex ">
        <div className="font-bold w-full  flex text-xs">
          <div className="w-1/2">
            {area?.name}
            <span className=" text-sm font-thin"> x{area?.quantity}</span>{' '}
          </div>
          <div className="truncate w-1/4 flex justify-center items-center font-normal text-xs max-w-full  ">
            <span className="truncate">Última actualización</span>
          </div>
          <div className="truncate w-1/3 flex justify-center items-center font-normal text-xs  ">
            Conteo
          </div>
          <div className="truncate w-1/3 flex justify-center items-center font-normal text-xs  ">
            Listo
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        {area?.items?.map((item, i) => (
          <ItemRow area={area} espacio={espacio} item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

const schema = yup.object().shape({
  quantity: yup.number().required()
})

const ItemRow = ({ item, espacio, area }) => {
  const { user } = useAuth()
  const handleSaveInventary = (item, quantity) => {
    const obj = {
      espacioId: espacio.id,
      area: {
        id: area.id,
        name: area.name
      },
      item: {
        ...item,
        quantity: parseInt(quantity)
      }
    }
    newInventory(obj, { adminId: user.id })
      .then((res) => console.log(`res`, res))
      .catch((err) => console.log(`err`, err))
  }
  const [lastUpdate, setLastUpdate] = useState(undefined)

  useEffect(() => {
    getLastInventory(
      {
        itemId: item.id,
        espacioId: espacio.id,
        areaId: area.id
      },
      setLastUpdate
    )
  }, [])

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitSuccessful, isValid }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = ({ quantity }) => {
    handleSaveInventary(item, quantity)
  }

  console.log(`errors`, errors)
  const [disabled, setDisabled] = useState(false)
  return (
    <div className=" flex justify-between ">
      <div className="pl-2 w-6/12 flex items-center  justify-start text-sm">
        {item?.name}
      </div>
      <div className="font-thing text-[.5rem] italic w-1/4 flex items-center justify-center">
        {lastUpdate
          ? fromNow(lastUpdate?.createdAt, { addSuffix: false })
          : 'nunca'}
      </div>
      <div className="w-1/3  flex items-center justify-center">
        <Counter {...register('quantity')} />
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <Button
          disabled={disabled}
          iconOnly
          icon={<Icon name="save" size="xs" />}
          size="xs"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  )
}

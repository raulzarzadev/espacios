import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Text from '@comps/inputs/Text'
import { useEffect, useState } from 'react'
import ROUTES from 'src/CONSTANTS/ROUTES'
import FormTitleAndButton from '@comps/FormTitleAndButton'
import { getAdminItems } from '@fb/items'
import { useSelector } from 'react-redux'
import FormAddItem from '../FormAddItem'
import { createArea } from '@fb/areas'
const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required()
})

export default function FormArea({ area = {} }) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: area
  })
  const { user } = useSelector((state) => state.user)
  useEffect(() => {
    if (user) {
      getAdminItems(user?.id, setItems)
    }
  }, [user])
  const [items, setItems] = useState([])

  const onSubmit = (data) => {
     createArea(user?.id, data)
      .then((res) => console.log(`res`, res))
      .catch((err) => console.log(`err`, err)) 
  }

  const alreadyExist = false

  const handleSetItems = (props) => {
    setValue('items', props)
  }

  return (
    <div className="max-w-2xl mx-auto grid grid-flow-row justify-items-center py-6">
      <FormTitleAndButton
        disabled={!isDirty}
        title={`${alreadyExist ? item?.name : 'Nueva area'}`}
        label={isSubmitSuccessful ? 'Gardado' : 'Guardar'}
        onClick={handleSubmit(onSubmit)}
        loading={isSubmitting}
      />
      <Text
        label="Nombre del area"
        placeholder="Nombre"
        {...register('name')}
      />
      <Text
        label="Descripción"
        placeholder="Descripción (opcional)"
        {...register('description')}
      />
      <FormAddItem
        selectables={items}
        selected={watch()?.items}
        setSelected={handleSetItems}
        options={{
          addNewRoute: ROUTES.items.new(),
          modalOpenLabel: 'Agregar item',
          modalTitle: 'Nuevo item',
          addNewLabel:'Crear item nuevo'
        }}
      />
    </div>
  )
}

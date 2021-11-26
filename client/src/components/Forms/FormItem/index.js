import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Text from '@comps/inputs/Text'
import Button from '@comps/inputs/Button'
import FormTitleAndButton from '@comps/FormTitleAndButton'
import { createItem } from '@fb/items'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string()
})

export default function FormItem() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
    watch
  } = useForm({
    resolver: yupResolver(schema)
  })
  const router = useRouter()
  const { user } = useSelector((state) => state?.user)
  const onSubmit = (data) => {
    console.log(`data`, data)
    createItem(user?.id, data)
      .then((res) => console.log(`res`, res))
      .catch((err) => console.log(`err`, err))
  }
  const alreadyExist = false
  return (
    <div className="max-w-2xl mx-auto grid grid-flow-row justify-items-center py-6">
      <FormTitleAndButton
        disabled={!isDirty}
        title={`${alreadyExist ? item?.name : 'Nuevo item'}`}
        label={isSubmitSuccessful ? 'Gardado' : 'Guardar'}
        onClick={handleSubmit(onSubmit)}
        loading={isSubmitting}
      />
      <Text label="Nombre" placeholder="Nombre" {...register('name')} />
      <Text
        label="Descripción"
        placeholder="Descripción (opcional)"
        {...register('description')}
      />
      <div className="m-4">
        <Button onClick={() => router.back()} label="Regresar" />
      </div>
    </div>
  )
}

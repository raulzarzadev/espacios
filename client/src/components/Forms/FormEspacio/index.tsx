import { espacioType } from '@comps/Cards/EspacioCard'
import ContextualMenu from '@comps/ContextualMenu'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import ImagesSection from './ImagesSection'
import FormTitleAndButton from '@comps/FormTitleAndButton'
import Counter from '@comps/inputs/Counter2'
import AlreadyExistSection from './AlreadyExistSection'
import FormSection from './FormSection'
import { createEspacio, updateEspacio } from '@fb/espacios'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'
import ROUTES from 'src/CONSTANTS/ROUTES'


import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const schema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required()
})

export default function FormEspacio({
  formTitle = 'espacios form',
  alreadyExist = false,
  espacio
}: espacioForm) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isDirty, isSubmitting },
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: espacio
  })

  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.user)
  const onSubmit = async (data: any) => {
    if (!data?.id) {
      createEspacio(user?.id, data)
        .then((res) => {
          if (res.ok) {
            router.push(ROUTES.espacios.details(res.res.id))
          }
        })
        .catch((err) => console.log(`err`, err))
    } else {
      updateEspacio(data.id, data)
    }
  }

  const handleChange = (field: any, value: any) => {
    setValue(field, value, {  shouldDirty: true })
  }

  // const { contracts, images } = form
  return (
    <div className="max-w-md mx-auto mt-4 ">
      <section className="sticky top-0 left-0 right-0 bg-white-light z-10   ">
        <FormTitleAndButton
          disabled={!isDirty}
          title={`${alreadyExist ? espacio?.name : 'Nuevo espacio'}`}
          label={alreadyExist ? 'Editar' : 'Guardar'}
          onClick={handleSubmit(onSubmit)}
          loading={isSubmitting}
        />

        {/* -----form navigation ----- */}
        <ContextualMenu
          links={[
            { href: '#', label: 'Espacio' },
            { href: '#services', label: 'Servicios' },
            { href: '#areas', label: 'Areas' },
            { href: '#contract', label: 'Contratos' }
          ]}
        />
      </section>
      {/* -----Form------  */}

      {/* -----form images ----- */}
      <FormSection title="Imagenes" id="images">
        <ImagesSection espacioId={espacio?.id} />

        {/* -----form espacios ----- */}
      </FormSection>
      <FormSection id="espacios" title="Espacio">
        <form>
          <div className="my-2">
            <Text
              {...register('name')}
              errorText={errors?.name && errors.name.message}
              placeholder="Nombre"
              fullWidth
            />
          </div>
          <div className="my-2">
            <Text
              {...register('address')}
              errorText={errors?.address && errors.address.message}
              helperText=""
              placeholder="Dirección"
              fullWidth
            />
          </div>
          <div className="my-2">
            <Text
              {...register('advertLink')}
              errorText={errors?.advertLink && errors.advertLink.message}
              helperText=""
              placeholder="Anuncio (Link)"
              fullWidth
            />
          </div>
          <div className="my-2">
            <Text
              {...register('doorPassword')}
              errorText={errors?.doorPassword && errors.doorPassword.message}
              helperText=""
              placeholder="Clave de entrada"
              fullWidth
            />
          </div>
          <div className="my-2">
            <TextArea
              errorText={errors?.coments && errors.coments.message}
              helperText=""
              placeholder="Comentarios"
              rows={2}
              fullWidth
              {...register('coments')}
            />
          </div>
          <div>
            <label className="flex mx-auto">
              <span className="mr-2 ">Huespedes</span>
              <Counter {...register('guests')} />
            </label>
          </div>
        </form>

        {/*  <Text placeholder="Tipo de espacio" />
          <Text placeholder="Tipo de alojamiento" />
        <Text placeholder="Tipo de propiedad" /> 
        */}
      </FormSection>

      {/* ------------------------- -----------------------------------------          ALERADY EXIST SECTION------------------------- */}

      {alreadyExist && (
        <AlreadyExistSection espacio={espacio} handleChange={handleChange} />
      )}
    </div>
  )
}

interface espacioForm {
  formTitle: string
  alreadyExist?: boolean
  espacio?: espacioType
}

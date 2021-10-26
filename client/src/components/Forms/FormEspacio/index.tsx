import AddSquare from '@comps/AddSquare'
import { espacioType } from '@comps/Cards/EspacioCard'
import ContextualMenu from '@comps/ContextualMenu'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/modals'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ImagesSection from './ImagesSection'
import FormTitleAndButton from '@comps/FormTitleAndButton'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import router, { useRouter } from 'next/router'
import Counter from '@comps/inputs/Counter2'
import LocationSection from './LocationSection'
import DaysPicker from '@comps/inputs/DaysPicker'
import AlreadyExistSection from './AlreadyExistSection'
import FormSection from './FormSection'

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
  const onSubmit = async (data: any) => {
    console.log('data', data)

    if (data.id) {
      await axios
        .put(`/api/espacios/${data.id}`, data)
        .then((res) => {
          router.push(`/espacios/${data.id}`)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      await axios
        .post('/api/espacios/new', data)
        .then(({ data }) => {
          router.push(`/espacios/${data.id}`)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  console.log(isDirty)

  const handleChange = (field: any, value: any) => {
    setValue(field, value, { shouldValidate: true, shouldDirty: true })
  }

  // const { contracts, images } = form
  return (
    <div className="max-w-md mx-auto mt-4 ">
      <section className="sticky top-0 left-0 right-0 bg-white-light z-10   ">
        <FormTitleAndButton
          disabled={!isDirty}
          title="Nuevo espacio"
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

      <section className="grid p-4 pt-0 gap-2 max-w-lg mx-auto">
        {/* -----form images ----- */}
        <h3 className="font-bold">Imagenes</h3>
        <ImagesSection />

        {/* -----form espacios ----- */}
      </section>
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

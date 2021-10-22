import AddSquare from '@comps/AddSquare'
import { espacioType } from '@comps/Cards/EspacioCard'
import ContextualMenu from '@comps/ContextualMenu'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter'
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

const schema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required()
})

export default function FormEspacio({
  formTitle = 'espacios form',
  alreadyExist,
  espacio
}: espacioForm) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: espacio
  })

  const onSubmit = async (data: any) => {
    console.log('data', data)
    setSaveLoading(true)
    if (data.id) {
      await axios
        .post(`/api/espacios/${data.id}/edit`, data)
        .then((res) => {})
        .catch((err) => {
          false
          console.log(err)
        })
    } else {
      await axios
        .post('/api/espacios/new', data)
        .then((res) => {})
        .catch((err) => {
          false
          console.log(err)
        })
    }
    setSaveLoading(false)
  }

  const [saveLoading, setSaveLoading] = useState(false)

  // const { contracts, images } = form
  return (
    <div className="w-full max-w-full ">
      <section className="sticky top-0 left-0 right-0 bg-white-light z-10   ">
        <FormTitleAndButton
          title="Nuevo espacio"
          label="Guardar"
          onClick={handleSubmit(onSubmit)}
          loading={saveLoading}
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

        <section id="espacios" className="flex w-full flex-col ">
          <h3 className="font-bold">Espacio</h3>
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
          </form>

          <label className="flex mx-auto">
            <span className="mr-2">Huespedes</span>
            <Counter />
          </label>

          <div>
            <h4>Ubicación</h4>
            <div className="h-16 w-full bg-white-dark"></div>
          </div>

          {/*  <Text placeholder="Tipo de espacio" />
          <Text placeholder="Tipo de alojamiento" />
        <Text placeholder="Tipo de propiedad" /> 
        */}
        </section>

        {/* -----form Servicios ----- */}

        <section id="services" className="flex w-full">
          {/*   <div className="w-full">
            <h3 className="font-bold">Servicios</h3>
            {form?.services?.map((id) => (
              <ServiceCard key={id} service={{ id }} />
            ))}
            <div className="flex w-full justify-center my-4">
              <Button
                type="button"
                label="Agregar Servicio"
                onClick={() =>
                  router.push(
                    `/services/new${form?.id && `?espacio=${form.id}`}`
                  )
                }
              />
            </div>
          </div> */}
        </section>
        <section id="areas" className="flex w-full">
          <div className="w-full">
            <h3 className="font-bold">Areas</h3>
            <div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  Baño
                  <Counter />
                </label>
              </div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  1/2 Baño
                  <Counter />
                </label>
              </div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  Cocina
                  <Counter />
                </label>
              </div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  Habitaciones
                  <Counter />
                </label>
              </div>
              <div className="flex w-full justify-center my-4">
                <Modal
                  title="Agregar area"
                  OpenComponent={Button}
                  openProps={{ label: 'Agregar area', variant: 'outlined' }}
                  onContinue={() => console.log('guardar')}
                  continueButton="Agregar"
                >
                  Nueva area
                </Modal>
              </div>
            </div>
          </div>
        </section>
        <section id="contract" className="flex w-full">
          <div className="w-full">
            <h3 className="font-bold">Contratos</h3>
            {/* <ContractsSection contracts={contracts} /> */}
          </div>
        </section>
        <section id="contract" className="flex w-full">
          <div className="w-full">
            <h3 className="font-bold">Configuración</h3>

            <DeleteButton espacio={espacio} />

            {/* <ContractsSection contracts={contracts} /> */}
          </div>
        </section>
      </section>
    </div>
  )
}

const DeleteButton = ({ espacio }: { espacio: any }) => {
  const [open, setOpen] = useState(false)
  const handleOpenDelete = () => {
    setOpen(!open)
  }
  const handleDelete = () => {
    // axios.delete(`/api/espacios/${espacio.id}`)
    console.log(`espacio`, espacio)
  }
  return (
    <div>
      <Modal
        OpenComponent={Button}
        openProps={{
          fullWidth: true,
          label: 'Eliminar',
          variant: 'secondary',
          type: 'button',
          onClick: { handleOpenDelete }
        }}
        title="Eliminar espacio"
        onContinue={handleDelete}
        continueButton="Eliminar"
        cancelButton="Cancelar"
        continueButtonVariant="secondary"
      >
        <div>Eliminar este espacio</div>
      </Modal>
    </div>
  )
}

interface espacioForm {
  formTitle: string
  alreadyExist?: boolean
  espacio?: espacioType
}

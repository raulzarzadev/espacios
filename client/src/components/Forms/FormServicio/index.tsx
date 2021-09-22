import AddSquare from '@comps/AddSquare'
import { espacioType } from '@comps/Cards/EspacioCard'
import { selectOption } from '@comps/inputs/inputTypes'
import Select from '@comps/inputs/Select'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/modals'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import { testImage } from 'src/assets/images'
import useAxios from 'src/hooks/useAxios'
import { useForm } from 'react-hook-form'
import FormTitleAndButton from '@comps/FormTitleAndButton'
import SERVICES from 'src/CONSTANTS/SERVICES'
import InputDate from '@comps/inputs/InputDate'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'
import CurrencyInput from '@comps/inputs/CurrencyInput'
import InputNumber from '@comps/inputs/InputNumber'
import FIELD_VALIDATIONS from 'src/CONSTANTS/FIELD_VALIDATIONS'
import Button from '@comps/inputs/Button'
import SeriviceHistory from './ServiceHistory'
import { useRouter } from 'next/router'
const schema = yup.object().shape({
  espacio: yup.string().required(),
  serviceType: yup.string().required(),
  serviceNo: yup.string().required(),
  periodOf: yup.number().required()
})
/* const espacios = [
  { id: '1', label: 'Espacio 1' },
  { id: '2', label: 'Espacio 2' },
  { id: '3', label: 'Espacio 3' }
]
const servicios = [
  { id: '1', label: 'Gas 1' },
  { id: '2', label: 'Luz 2' },
  { id: '3', label: 'Agua 3' }
]
const records = [
  { id: '1', date: '12/12/12', image: testImage, quantity: '22.22' },
  { id: '2', date: '12/11/12', image: testImage, quantity: '22.22' },
  { id: '3', date: '12/11/13', image: testImage, quantity: '22.22' },
  { id: '4', date: '12/11/13', image: testImage, quantity: '22.22' }
] */
export default function FormService({
  serviceId,
  espacioId
}: {
  serviceId?: string
  espacioId: string
}) {
  const router = useRouter()
  const onSubmit = (data: any) => console.log(data)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const [servicios, setServicios] = useState([])
  const [espacios, setEspacios] = useState<Array<espacioType>>([])
  const [records, setRecords] = useState<Array<espacioType>>([])
  const {
    response: espaciosRes,
    loading: espacioLoading,
    error: espacioErrors
  } = useAxios({
    url: '/api/espacios'
  })
  useEffect(() => {
    if (espaciosRes) {
      setEspacios(espaciosRes)
    }
  }, [espaciosRes])

  const services = SERVICES
  const setErrorMessage = (fieldName: string) =>
    errors[fieldName] && FIELD_VALIDATIONS[errors[fieldName].type]
  const [buttonLabel, setButtonLabel] = useState<string>('Guardar')

  return (
    <div className="max-w-md mx-auto  ">
      <section className="sticky top-0 left-0 right-0 bg-white-light z-10   ">
        <FormTitleAndButton
          title="Nuevo Servicio"
          label={buttonLabel}
          onClick={() => {
            handleSubmit(onSubmit)
            setButtonLabel('Guardado')
            setTimeout(() => {
              router.back()
            }, 800)
          }}
        />
      </section>
      <section className="p-2">
        <div className="grid gap-3 max-w-[10rem] mx-auto">
          <Select
            {...register('espacio')}
            errorText={setErrorMessage('espacio')}
            options={espacios}
            placeholder="Espacio"
            fullWidth
          />
          <Select
            {...register('serviceType')}
            errorText={setErrorMessage('serviceType')}
            options={services}
            placeholder="Tipo de servicio"
            fullWidth
          />
        </div>
        <div className="grid gap-3  grid-cols-2 my-6 ">
          <Text
            {...register('contractNo')}
            errorText={setErrorMessage('contractNo')}
            placeholder="No. contrato"
            fullWidth
          />
          <Text
            {...register('company')}
            errorText={setErrorMessage('company')}
            placeholder="Compañia"
            fullWidth
          />
          <Text
            {...register('serviceNo')}
            placeholder="No. servicio"
            errorText={setErrorMessage('serviceNo')}
            fullWidth
          />
          <Text
            {...register('support')}
            errorText={setErrorMessage('support')}
            placeholder="Asisitencia"
            fullWidth
          />
          <InputNumber
            {...register('periodOf')}
            errorText={setErrorMessage('periodOf')}
            placeholder="Perodo de corte (dias)"
            fullWidth
          />
          <label>
            <InputDate fullWidth {...register('registrationDate')} />
          </label>
        </div>
        <div className=" grid gap-4">
          <label className="flex flex-col w-full justify-center">
            <Button label="Archivos" fullWidth disabled />
            <input
              disabled
              type="file"
              name=""
              id=""
              className="max-w-full hidden"
            />
          </label>
          <TextArea
            {...register('coments')}
            placeholder="Comentarios"
            errorText={setErrorMessage('coments')}
            fullWidth
            rows={2}
          />
        </div>
        <h3 className="font-bold text-xl text-center pb-4">Hisotrial</h3>
        <SeriviceHistory records={records} />
      </section>
    </div>
  )
}

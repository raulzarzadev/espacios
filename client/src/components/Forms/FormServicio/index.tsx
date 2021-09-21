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

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputNumber from '@comps/inputs/InputNumber'
const schema = yup.object().shape({
  espacio: yup.string().required(),
  serviceType: yup.string().required(),
  serviceNo: yup.string().required(),
  periodOf: yup.string().required()
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
  const onSubmit = (data) => console.log(data)
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

  console.log(errors)

  const services = SERVICES

  /*  

 
    records: []
  })
  
  
  
  
  
  useEffect(() => {
    if (espacioId) {
      setForm({ ...form, espacioId })
    }
  }, [espacioId])
  console.log(form); */

  return (
    <div className="max-w-md mx-auto  ">
      <section className="sticky top-0 left-0 right-0 bg-white-light z-10   ">
        <FormTitleAndButton
          title="Nuevo Servicio"
          label="Guardar"
          onClick={handleSubmit(onSubmit)}
        />
      </section>
      <section className="p-2">
        <div className="grid gap-3 max-w-[10rem] mx-auto">
          <Select
            {...register('espacio')}
            errorText={errors.espacio && errors.espacio.message}
            options={espacios}
            placeholder="Espacio"
            fullWidth
          />
          <Select
            {...register('serviceType')}
            errorText={errors.service && errors.service.message}
            options={services}
            placeholder="Tipo de servicio"
            fullWidth
          />
        </div>
        <div className="grid gap-3  grid-cols-2 my-6 ">
          <Text
            {...register('contractNo')}
            errorText={errors.contractNo && errors.contractNo.message}
            placeholder="No. contrato"
            fullWidth
          />
          <Text
            {...register('company')}
            errorText={errors.company && errors.company.message}
            placeholder="Compañia"
            fullWidth
          />
          <Text
            {...register('serviceNo')}
            errorText={errors.serviceNo && errors.serviceNo.message}
            placeholder="No. servicio"
            fullWidth
          />
          <Text
            {...register('support')}
            errorText={errors.support && errors.support.message}
            placeholder="Asisitencia"
            fullWidth
          />
          <InputNumber
            {...register('periodOf')}
            errorText={errors.periodOf && errors.periodOf.message}
            placeholder="Perodo de corte (dias)"
            fullWidth
          />
          <label>
            <InputDate fullWidth {...register('registrationDate')} />
          </label>
          <label>
            Archivos
            <input disabled type="file" name="" id="" className="max-w-full" />
          </label>
        </div>
        <div className="">
          <TextArea
            {...register('coments')}
            placeholder="Comentarios"
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

const SeriviceHistory = ({ records = [] }: { records: Array<any> }) => {
  return (
    <section id="images" className="flex  max-w-[90vw] overflow-auto mx-auto">
      <NewServiceRecord />
      {records?.map((record, i) => (
        <div key={record.id} className="w-20 h-20 m-1">
          <ServiceRecord record={record} />
        </div>
      ))}
    </section>
  )
}

const NewServiceRecord = () => {
  const [form, setForm] = useState({})
  return (
    <Modal
      OpenComponent={AddSquare}
      openProps={{ size: 'lg' }}
      title="Nueva entrada"
      continueButton="Guardar"
      onContinue={() => console.log(form)}
    >
      <div className="grid gap-4 p-4">
        <div>Preview</div>
       {/*  <label>
          Comprobante
          <input type="file" name="image" id="" />
        </label> */}
        <InputNumber placeholder="Cantidad ($)" fullWidth />
        <Text placeholder="Titulo (opcional)" fullWidth />
        <TextArea placeholder="Descripción (opcional)" rows={2} fullWidth />
      </div>
    </Modal>
  )
}

const ServiceRecord = ({ record }: { record: recordType }) => {
  console.log(record)

  const [form, setForm] = useState(record)
  return (
    <Modal
      OpenComponent={PreviewRecord}
      openProps={{ image: form.image }}
      title="Detalles entrada"
      continueButton="Actualizar"
      onContinue={() => console.log(form)}
    >
      <div className="grid gap-4 p-4">
        <div className="relative w-40 h-40">
          {form.image && (
            <Image src={form.image} objectFit="cover" layout="fill" alt="alt" />
          )}
        </div>
        <label>
          Comprobante
          <input type="file" name="image" id="" />
        </label>
        <label>
          Fecha
          <input value={'2012/12/12'} type="date" name="" id="" />
        </label>
        <Text value={form.quantity} placeholder="Cantidad" fullWidth />
        <Text value={form.title} placeholder="Titulo (opcional)" fullWidth />
        <TextArea
          value={form.coments}
          placeholder="Descripción (opcional)"
          rows={2}
          fullWidth
        />
      </div>
    </Modal>
  )
}
const PreviewRecord = ({
  image,
  date,
  ...rest
}: {
  image: string
  date: string
}) => (
  <button className="relative w-20 h-20" {...rest}>
    <Image
      src={image}
      layout="fill"
      objectFit="cover"
      alt="alt image"
      className="rounded-lg"
    />
    <span className="z-10 absolute top-0">{date}</span>
  </button>
)

interface recordType {
  id: string
  label: string
  image: string
  title: string
  coments: string
  quantity: string
}

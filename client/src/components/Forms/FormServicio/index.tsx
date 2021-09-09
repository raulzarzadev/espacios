import AddSquare from '@comps/AddSquare'
import { selectOption } from '@comps/inputs/inputTypes'
import Select from '@comps/inputs/Select'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Modal from '@comps/modals'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import { testImage } from 'src/assets/images'

const espacios = [
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
]
export default function FormService({ serviceId }: { serviceId?: string }) {
  const [form, setForm] = useState({})
  useEffect(() => {
    if (serviceId) {
      //get service information
    }
  }, [serviceId])

  return (
    <div className="max-w-md mx-auto p-1 ">
      <h3 className="font-bold text-xl text-center pb-4">Nuevo Servicio</h3>
      <div className="grid gap-3 max-w-[10rem] mx-auto">
        <Select options={espacios} placeholder="Espacio" fullWidth />
        <Select options={servicios} placeholder="Servicio" fullWidth />
      </div>
      <div className="grid gap-3  grid-cols-2 my-6 ">
        <Text placeholder="No. contrato" fullWidth />
        <Text placeholder="Compañia" fullWidth />
        <Text placeholder="No. servicio" fullWidth />
        <Text placeholder="Asisitencia" fullWidth />
        <Text placeholder="Perodo de corte (dias)" fullWidth />
        <label>
          Incio de contrato
          <input type="date" name="" id="" className="max-w-full" />
        </label>
        <label>
          Contrato
          <input type="file" name="" id="" className="max-w-full" />
        </label>
      </div>
      <div className="">
        <TextArea placeholder="Comentarios" fullWidth rows={2} />
      </div>
      <h3 className="font-bold text-xl text-center pb-4">Hisotrial</h3>
      <SeriviceHistory records={records} />
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
        <label>
          Comprobante
          <input type="file" name="image" id="" />
        </label>
        <Text placeholder="Cantidad" fullWidth />
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

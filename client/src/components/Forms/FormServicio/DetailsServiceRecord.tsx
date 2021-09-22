import FormServiceRecord, { recordType } from './FormServiceRecord'
import Image from 'next/image'
import Modal from '@comps/modals'
import { useState } from 'react'
const DetailsServiceRecord = ({ record }: { record: recordType }) => {
  const [form, setForm] = useState(record)
  return (
    <Modal
      OpenComponent={PreviewRecord}
      openProps={{ image: form.image }}
      title="Detalles entrada"
    >
      <div className="grid gap-4 p-4">
        <FormServiceRecord record={record}/>
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
export default DetailsServiceRecord


import Button from '@comps/inputs/Button'
import CurrencyInput from '@comps/inputs/CurrencyInput'
import InputDate from '@comps/inputs/InputDate'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import FIELD_VALIDATIONS from 'src/CONSTANTS/FIELD_VALIDATIONS'
import * as yup from 'yup'
import { useState } from 'react'

const serviceSchema = yup.object().shape({
  quanity: yup.string().required(),
  title: yup.string().required()
})

const FormServiceRecord = ({ record }: { record?: recordType }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(serviceSchema)
  })
  const setErrorMessage = (fieldName: string) =>
    errors[fieldName] && FIELD_VALIDATIONS[errors[fieldName].type]

  const [buttonLabel, setButtonLabel] = useState<string>('Guardar')
  const onSubmit = (data: any) => {
    console.log({ id: record?.id || null, ...data })
    setButtonLabel('Guardado')
  }

  return (
    <div className="grid gap-4 p-4">
      {/*  <div className="relative w-40 h-40">
        {form.image && (
          <Image src={form.image} objectFit="cover" layout="fill" alt="alt" />
        )}
      </div> */}

      {/* <div>Preview</div>
         <label>
          Comprobante
          <input type="file" name="image" id="" />
        </label>  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputDate
          helperText="Fecha de pago"
          fullWidth
          {...register('paymentDate')}
          value={record?.date}
        />
        <CurrencyInput
          value={record?.quantity}
          helperText="Monto"
          fullWidth
          errorText={setErrorMessage('quanity')}
          {...register('quanity')}
          placeholder="Cantidad ($)"
        />
        <Text
          value={record?.title}
          helperText="Titulo corto"
          {...register('title')}
          placeholder="Titulo (opcional)"
          errorText={setErrorMessage('title')}
          fullWidth
        />
        <TextArea
          value={record?.description}
          helperText="Comentarios o descripción"
          errorText={setErrorMessage('description')}
          {...register('description')}
          placeholder="Descripción (opcional)"
          rows={2}
          fullWidth
        />
        <div className="flex justify-center w-full">
          <Button label={buttonLabel} type="submit" />
        </div>
      </form>
    </div>
  )
}

export interface recordType {
  id: string
  image: string
  title: string
  coments: string
  description: string
  quantity: string
  date: string
}

export default FormServiceRecord

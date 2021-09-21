import FormService from '@comps/Forms/FormServicio'
import { useRouter } from 'next/router'

export default function NewService() {
  const {
    query: { espacio }
  } = useRouter()
  console.log(espacio)
  return (
    <div className="">
      <FormService espacioId={espacio || ''} />
    </div>
  )
}

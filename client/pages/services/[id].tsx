import FormService from '@comps/Forms/FormServicio'
import { useRouter } from 'next/router'
import useAxios from 'src/hooks/useAxios'
export default function Service() {
  const {
    query: { id }
  } = useRouter()
  const { response, loading, error } = useAxios({ url: `/api/services/${id}` })
 
  return (
    <div className="">
      <FormService service={response} />
    </div>
  )
}

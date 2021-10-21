import FormService from '@comps/Forms/FormServicio'
import RouteType from '@comps/HOCS/RouteType'
import { useRouter } from 'next/router'
import useAxios from 'src/hooks/useAxios'
export default function Service() {
  const {
    query: { id }
  } = useRouter()
  const { response, loading, error } = useAxios({ url: `/api/services/${id}` })

  return (
    <div className="">
      <RouteType type="private">
        <FormService service={response} />
      </RouteType>
    </div>
  )
}

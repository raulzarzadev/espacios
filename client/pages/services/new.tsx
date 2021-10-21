import FormService from '@comps/Forms/FormServicio'
import RouteType from '@comps/HOCS/RouteType'

export default function NewService() {
  return (
    <div className="">
      <RouteType type="private">
        <FormService />
      </RouteType>
    </div>
  )
}

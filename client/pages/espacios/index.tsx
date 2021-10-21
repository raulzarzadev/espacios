import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import Espacios from 'src/views/Espacios'

export default function EspaciosPage() {
  return (
    <>
      <Head title="Espacios list" />
      <RouteType type="private">
        <Espacios />
      </RouteType>
    </>
  )
}

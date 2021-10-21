import FormEspacio from '@comps/Forms/FormEspacio'
import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import NewEspacio from 'src/views/Espacios/new'

export default function newEspacioPage() {
  return (
    <div className="">
      <Head title="Detalles | Espacio" />
      <RouteType type="private">
        <NewEspacio />
      </RouteType>
    </div>
  )
}

import AdminCard from '@comps/Cards/AdminCard'
import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import Link from '@comps/Link'
import Home from 'src/views/Home'

export default function HomeP() {
  return (
    <>
      <Head title="Inicio" />
      <RouteType type="private">
        <Home />
      </RouteType>
    </>
  )
}

import Head from '@comps/Head'
import Home from 'src/views/Home'
import type { NextPage } from 'next'
import Link from '@comps/Link'
import RouteType from '@comps/HOCS/RouteType'

const HomePage: NextPage = () => {
  return (
    <>
      <RouteType type="public">
        <Head title="Espacios App" />
        <h3>Hola, bienvenido a espacios</h3>
        <div>
          Ahora estamos trabajando en los componentes, puedes verlos aqui
          <Link href="/visual-guide">
            <span className="m-3 underline">Guia visual</span>
          </Link>
        </div>
      </RouteType>
    </>
  )
}

export default HomePage

import Head from '@comps/Head'
import Home from 'src/views/Home'
import type { NextPage } from 'next'
import Link from '@comps/Link'

const HomePage: NextPage = () => {
  return (
    <>
      <Head title="Home" />
      <h3>Hola, bienvenido a espacios</h3>
      <div>
        Ahora estamos trabajando en los componentes, puedes verlos aqui
        <Link href="/viusal-guide">
          <a className="m-3 underline">Guia visual</a>
        </Link>
      </div>
    </>
  )
}

export default Home

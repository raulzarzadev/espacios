import Head from '@comps/Head'
import Home from 'src/views/Home'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <Head title="Home" />
      <Home />
    </>
  )
}

export default Home

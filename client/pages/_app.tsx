import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Layout from 'src/layouts'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>
       Espacios App
      </title>
      <link rel='icon' href='/espacios.png'></link>
      <meta name='description' content=' Espacios App is a platform for the management of spaces to conserve the best environment for your guest and the owners'/>
    </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
export default MyApp

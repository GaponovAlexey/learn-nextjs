import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import '../styles/globals.scss'

import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

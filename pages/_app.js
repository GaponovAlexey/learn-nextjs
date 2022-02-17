import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
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

export default MyApp

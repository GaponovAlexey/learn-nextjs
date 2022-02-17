import Head from 'next/head'
import Link from 'next/link'
import Heading from '../components/Layout/Heading'
import style from '../styles/Home.module.scss'

const Home = () => {



  return (
    <div className={style.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text={'Home'} />
      <button>
        <Link href='./posts'>posts</Link>
      </button>
      <br />
      <button>
        <Link href='./contacts'>Contacts</Link>
      </button>
    </div>
  )
}

export default Home

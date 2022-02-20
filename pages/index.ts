import Head from 'next/head'
import Link from 'next/link'
import Heading from '../components/Layout/Heading'
import style from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const res = await fetch(process.env.BASE_URL + `/socials`)
  const data = await res.json()

  if (!data) {
    return { notFound: true }
  }
  return {
    props: { socials: data },
  }
}

const Home = ({ socials }) => {
  if (!socials) {
    return null
  }
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
      <div>
        {socials && socials.map((el) => <div key={el.id}>{el.name}</div>)}
      </div>
    </div>
  )
}

export default Home

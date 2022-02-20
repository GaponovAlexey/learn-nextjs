import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import Heading from '../components/Layout/Heading'
import style from '../styles/Home.module.scss'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/socials`)
    const data = await res.json()

    if (!data) {
      return { notFound: true }
    }
    return {
      props: { socials: data },
    }
  } catch (error) {
    return {
      props: { socials: null },
    }
  }
}

interface Hometype {
  id: number
  name: string
  imailed: string
}

type homeTypeProp = {
  socials: [Hometype]
}

const Home: FC<homeTypeProp> = ({ socials }) => {
  console.log(socials)

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
        {socials && socials.map(({ id, name }) => <div key={id}>{name}</div>)}
      </div>
    </div>
  )
}

export default Home

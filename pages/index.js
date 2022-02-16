import Link from 'next/link'
import Heading from '../components/Heading'
import style from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Heading text={'Home'} />
      <button>
        <Link href='./posts'>posts</Link>
      </button>
    </div>
  )
}

export default Home

import Link from 'next/link'
import Heading from '../components/Heading'

const Home = () => {
  return (
    <div>
      <Heading text={'Home'} />
      <button>
        <Link href='./posts'>posts</Link>
      </button>
    </div>
  )
}

export default Home

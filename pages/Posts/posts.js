import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const Posts = () => {
  return (
    <>
      <Heading text='posts in Posts' />
      posts in Posts <br />
      <button>
        <Link href='/'>back</Link>
      </button>
    </>
  )
}

export default Posts

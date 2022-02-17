import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const Posts = () => {
  return (
    <>
      <Heading text={'home posts'} />
      home posts two
      <button>
        <Link href='/posts/posts'>next posts</Link>
      </button>
      <br />
      <button>
        <Link href='/'>Home</Link>
      </button>
    </>
  )
}

export default Posts

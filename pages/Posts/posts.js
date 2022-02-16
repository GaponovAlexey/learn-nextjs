import Link from 'next/link'
import Heading from '../../components/Heading'

const Posts = () => {
  return (
    <div>
      <Heading text='posts in Posts' />
      posts in Posts <br/>
      <button  >
        <Link href='/'>back</Link>
      </button>
    </div>
  )
}

export default Posts

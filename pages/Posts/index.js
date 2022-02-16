import Link from 'next/link'
import Heading from '../../components/Heading'

const Posts = () => {
  return (
    <div>
      <Heading text={'home posts'} />
      home posts two
      <button className='btn' >
        <Link href='./posts/posts'>next posts</Link>
      </button>
      <br/>
      <button className='btn' >
        <Link href='./'>Home</Link>
      </button>
    </div>
  )
}

export default Posts

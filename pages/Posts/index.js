import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const Posts = () => {
  return (
    <>
    <Head>
      <title>posts</title>
    </Head>
      hi
      <Heading text={'home posts'} />
      <button>
        <Link href='/posts/posts'>next posts</Link>
      </button>
    </>
  )
}

export default Posts

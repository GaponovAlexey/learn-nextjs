import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export const getServerSideProps = async (context) => {
  const response = await fetch(baseURL)
  const data = await response.json()
  if (!data) {
    return { notFound: true }
  }
  return {
    props: { posts: data.splice(0 ,10) },
  }
}

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>posts</title>
      </Head>
      {posts &&
        posts.map(({id, title, body }) => {
          return (
            <div key={id}>
              {id} - 
              <strong>{title}</strong>
              <br />
              {body}
            </div>
          )
        })}
    </>
  )
}

export default Posts

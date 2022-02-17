import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export const getStaticPaths = async () => {
  const response = await fetch(baseURL)
  const data = await response.json()

  const path = data.map(({ id }) => ({
    params: { id: id.toString() },
  }))
  return {
    path,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params

  const response = await fetch(baseURL + `${id}`)
  const data = await response.json()
  if (!data) {
    return { notFound: true }
  }
  return {
    props: { posts: data },
  }
}

const Posts = ({ posts }) => {
  return <>hi</>
}

export default Posts

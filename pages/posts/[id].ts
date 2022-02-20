import Head from 'next/head'

const baseURL = 'https://jsonplaceholder.typicode.com/posts/'

export const getStaticPaths = async () => {
  const response = await fetch(baseURL)
  const data = await response.json()

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }))
  return { paths, fallback: false }
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
  const { body, title, id } = posts || {}
  console.log(body)
  return (
    <>
      <Head>
        <title>posts</title>
      </Head>
      <div>
        <strong>{title}</strong>
        <div>{body}</div>
      </div>
    </>
  )
}

export default Posts

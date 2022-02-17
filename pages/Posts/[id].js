import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export const getStaticPaths = async () => {
  const response = await fetch(baseURL)
  const data = await response.json()
  
  const path = data.map(({id}) => ({
    params: {}
  }))
}


const Posts = () => {
  return <>hi</>
}

export default Posts

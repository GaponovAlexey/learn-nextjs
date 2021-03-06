import { useRouter } from 'next/router'
import { useEffect } from 'react'
const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/'), 3000)
  }, [])

  return <div className='style'>404 error</div>
}

export default Error

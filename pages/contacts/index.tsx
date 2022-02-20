import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/Layout/Heading'
const baseURL = 'https://jsonplaceholder.typicode.com/users'

export const getStaticProps = async () => {
  const response = await fetch(baseURL)
  const data = await response.json()
  if (!data) {
    return { notFound: true }
  }
  return {
    props: { contacts: data },
  }
}

const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text={'home contacts'} />
      <ul>
        {contacts &&
          contacts.map(({ name, id, email }) => (
            <div key={id}>
              <Link href={`./contacts/${id}`} >
                <strong>{name}-</strong>
              </Link>
              {email}
            </div>
          ))}
      </ul>
    </>
  )
}

export default Contacts

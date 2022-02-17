import Head from 'next/head'
import Link from 'next/link'
import ContactInfo from '../../components/ContactInfo'

const baseURL = 'https://jsonplaceholder.typicode.com/users/'

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(baseURL + `${id}`)
  const data = await response.json()
  if (!data) {return { notFound: true }}
  return {props: { contact: data },}
}

const Contacts = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />

      <Link href='./'>back</Link>
    </>
  )
}

export default Contacts

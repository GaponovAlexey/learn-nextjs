import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import Heading from '../../components/Layout/Heading'
import { ContactInfoType } from '../../components/type'
const baseURL = 'https://jsonplaceholder.typicode.com/users'

export const getStaticProps: GetServerSideProps = async () => {
  const response = await fetch(baseURL)
  const data = await response.json()
  if (!data) {
    return { notFound: true }
  }
  return {
    props: { contacts: data },
  }
}

type contactInfoType = {
  contacts: [ContactInfoType]
}

const Contacts: FC<contactInfoType> = ({ contacts }) => {
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
              <Link href={`./contacts/${id}`}>
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

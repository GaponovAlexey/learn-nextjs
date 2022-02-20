import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import ContactInfo from '../../components/ContactInfo'
import { ContactInfoType } from '../../components/type'

const baseURL = 'https://jsonplaceholder.typicode.com/users/'

type contactTypeProps = {contact: ContactInfoType}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(baseURL + `${id}`)
  const data = await response.json()
  if (!data) {
    return { notFound: true }
  }
  return { props: { contact: data } }
}

const Contacts: FC<contactTypeProps> = ({ contact }) => {
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

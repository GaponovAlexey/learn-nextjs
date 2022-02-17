import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Heading from '../../components/Layout/Heading'
const baseURL = 'https://jsonplaceholder.typicode.com/users'

const Contacts = () => {
  const [contacts, setContacts] = useState(null)

  useEffect(async () => {
    const FetchData = () => {}
    const data = response.json()
    setContacts(data)
    const response = await fetch(baseURL)
    FetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text={'home contacts'} />
      {contacts.map((el) => (
        <div>{el.name}</div>
      ))}

      <Link href='./contacts/contacts'>next Contacts</Link>
    </>
  )
}

export default Contacts

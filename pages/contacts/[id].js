import Link from 'next/link'
import ContactInfo from '../../components/ContactInfo'

import Heading from '../../components/Layout/Heading'

const Contacts = ({ contact }) => {
  return (
    <>
      <ContactInfo contact={contact} />

      <Link href='./'>back</Link>
    </>
  )
}

export default Contacts

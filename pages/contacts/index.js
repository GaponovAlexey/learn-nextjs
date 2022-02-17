import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const Contacts = () => {
  return (
    <>
      <Heading text={'home contacts'} />
      <button className='btn'>
        <Link href='./contacts/contacts'>next Contacts</Link>
      </button>
      <br />
      <button className='btn'>
        <Link href='./'>Home</Link>
      </button>
    </>
  )
}

export default Contacts

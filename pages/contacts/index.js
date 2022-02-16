import Link from 'next/link'
import Heading from '../../components/Heading'

const Contacts = () => {
  return (
    <div>
      <Heading text={'home contacts'} />
      <button className='btn'>
        <Link href='./contacts/contacts'>next Contacts</Link>
      </button>
      <br />
      <button className='btn'>
        <Link href='./'>Home</Link>
      </button>
    </div>
  )
}

export default Contacts

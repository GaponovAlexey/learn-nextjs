import Link from 'next/link'
import Heading from '../../components/Layout/Heading'

const Contacts = () => {
  return (
    <>
      <Heading text={'Contacts in Contacts'} />
      posts in Contacts <br />
      <button>
        <Link href='./'>back</Link>
      </button>
    </>
  )
}

export default Contacts

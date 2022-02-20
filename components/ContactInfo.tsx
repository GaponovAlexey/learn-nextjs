import { FC } from 'react'
import { ContactInfoType } from './type'

type contactInfoPropsType = {
  contact: ContactInfoType
}

const ContactInfo: FC<contactInfoPropsType> = ({ contact }) => {
  const { id, name, email, address } = contact || {}
  const { street, suite, city, zipcode } = address || {}
  if (!contact) {
    return <h1>no data</h1>
  }
  return (
    <div>
      <div>{name}</div>
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <div>Address: </div>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </div>
  )
}

export default ContactInfo

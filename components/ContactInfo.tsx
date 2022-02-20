const ContactInfo = ({ contact }) => {
  
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
        <string>Address: </string>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </div>
  )
}

export default ContactInfo

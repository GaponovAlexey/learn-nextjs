export interface addressType {
  street: string
  suite: string
  city: string
  zipcode: string
}

export interface ContactInfoType {
  id: number
  name: string
  email: string
  address: addressType
}

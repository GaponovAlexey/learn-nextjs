export interface addressType {
  street: string
  suite: string
  city: string
  zipcode: string
}

export interface ContactInfoType {
  id: string
  name: string
  email: string
  address: addressType
}

export type SocialType = {
  id: number,
  name: string,
  email: string,
  method: string,
}
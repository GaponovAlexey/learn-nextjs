import { FC } from 'react'
type heading = {
  tag: any
  text: string
}

const Heading: FC<heading> = ({ tag, text }) => {
  const Tag:any = tag || 'h1'
  return <Tag>{text}</Tag>
}

export default Heading

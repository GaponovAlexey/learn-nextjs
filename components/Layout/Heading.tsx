import { FC } from 'react'

const Heading: FC<{ tag: string; text: string }> = ({ tag, text }) => {
  const Tag: string = tag || 'h1'
  return <Tag>{text}</Tag>
}

export default Heading

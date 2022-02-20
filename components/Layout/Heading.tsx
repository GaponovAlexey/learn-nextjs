import { FC } from 'react'
type heading = {
  tag: string
  text: string
  
}

const Heading: FC<heading> = ({ tag, text }) => {
  const Tag = tag || 'h1'
  return <Tag>`${text}`</Tag>
}

export default Heading

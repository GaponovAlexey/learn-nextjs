import { socialsData } from './data/cosicalsData'
import  { NextApiRequest, NextApiResponse} from 'next'
import { FC } from 'react'



export default function socials(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(socialsData)
  }
}

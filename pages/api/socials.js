import { socialsData } from './data/cosicalsData'

export default function socials(req, res) {
  if(req.method === 'GET') {
    res.status(200).json(socialsData)
  }
}

import { socialsData } from './data/cosicalsData'

export default function socials(req, res) {
  res.status(200).json(socialsData)
}

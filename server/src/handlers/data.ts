import { RequestHandler } from 'express'
import { AuthenticatedRequest } from '../types'

export const data: RequestHandler = (req: AuthenticatedRequest, res) => {
  const { username } = req

  try {
    //!just for the demo purposes

    console.log(username === 'John')
    res.status(200).json({ message: 'you can receive the data' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: [{ msg: 'Server error' }] })
  }
}

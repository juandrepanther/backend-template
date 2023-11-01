import { RequestHandler } from 'express'

export const data: RequestHandler = (req, res) => {
  try {
    res.status(200).json({ message: 'you can receive the data' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: [{ msg: 'Server error' }] })
  }
}

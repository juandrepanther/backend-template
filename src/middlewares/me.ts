import jwt, { JwtPayload } from 'jsonwebtoken'
import { RequestHandler } from 'express'
import { AuthenticatedRequest } from '../types'

const secret = process.env.JWT_SECRET || 'secret'

export const me: RequestHandler = (req: AuthenticatedRequest, res, next) => {
  // get token from header
  const token = req.header('x-auth-token')

  // check if no token
  if (!token) {
    return res.status(401).json({ errors: [{ msg: 'Authorization denied!' }] })
  }

  // verify token
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload

    if (!decoded.username) {
      return res.status(401).json({ message: 'Something is wrong...' })
    }

    next()
  } catch (err) {
    res.status(401).json({ message: 'Something is wrong...' })
  }
}

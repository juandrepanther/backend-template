import jwt, { JwtPayload } from 'jsonwebtoken'
import { RequestHandler } from 'express'

const secret = process.env.JWT_SECRET || 'secret'

export const auth: RequestHandler = (req, res, next) => {
  // get token from header
  const token = req.header('x-auth-token')

  // check if no token
  if (!token) {
    return res.status(401).json({ errors: [{ msg: 'authorization denied' }] })
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload

    if (!decoded.username) {
      return res.status(401).json({ errors: [{ msg: 'Token is not valid' }] })
    }

    req.body.username = decoded.username

    res.status(200).json({ message: 'authenticated request' })

    next()
  } catch (err) {
    res.status(401).json({ errors: [{ msg: 'Token is not valid' }] })
  }
}

import { RequestHandler } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Admin } from '../models/Login'

const secret = process.env.JWT_SECRET || 'secret'

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body

  try {
    const adminUser = await Admin.findOne({ username })

    // Check passwords
    const match = await bcrypt.compare(password, adminUser.password)

    if (!match) {
      return res.status(401).json({ errors: [{ msg: 'Unauthorized' }] })
    }

    // return token
    const payload = {
      hello: 'payload',
    }

    jwt.sign(payload, secret, { expiresIn: '1d' }, (err, token) => {
      if (err) throw err
      res.json({ token })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: [{ msg: 'Server error' }] })
  }
}

import { RequestHandler } from 'express'
import bcrypt from 'bcryptjs'
import { Admin } from '../models/Login'
import { IAdmin } from '../types'

export const register: RequestHandler = async (req, res) => {
  const { username, password }: IAdmin = req.body

  try {
    let newAdmin = await Admin.findOne({ username })

    // if user exists
    if (newAdmin) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }

    // encrypt password
    const salt = await bcrypt.genSalt(10)
    const encrypted = await bcrypt.hash(password, salt)

    // create admin user
    newAdmin = new Admin({
      username,
      password: encrypted,
    })

    console.log(newAdmin)

    //create admin
    newAdmin.save()

    res.status(201).json({ message: 'admin created' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: [{ msg: 'Server error' }] })
  }
}

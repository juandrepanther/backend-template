import { Router } from 'express'
import { login } from './handlers/login'
import { register } from './handlers/register'
import { auth } from './middlewares/auth'

export const router = Router()

router.use('/login', login)
router.use('/register', register)

router.use('/data', auth, (req, res) => {
  res.status(200).json({ message: 'authenticated and can receive the data' })
})

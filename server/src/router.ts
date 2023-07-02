import { Router } from 'express'
import { login } from './handlers/login'
import { register } from './handlers/register'
import { auth } from './middlewares/auth'
import { data } from './handlers/data'

export const router = Router()

router.use('/login', login)
router.use('/register', register)

router.use('/data', auth, data)

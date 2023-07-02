import { Router } from 'express'
import { login } from './middlewares/login'
import { register } from './middlewares/register'

export const router = Router()

router.use('/login', login)
router.use('/register', register)

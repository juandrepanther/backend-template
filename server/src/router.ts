import { Router } from 'express'

import { login } from './handlers/login'
import { register } from './handlers/register'
import { data } from './handlers/data'

import { auth } from './middlewares/auth'

export const router = Router()

router.use('/api/login', login)
router.use('/api/register', register)

router.use('/api/data', auth, data)

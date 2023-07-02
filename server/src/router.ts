import { Router } from 'express'
import { login } from './routes/login'

export const router = Router()

// {API}/user
router.use('/login', login)

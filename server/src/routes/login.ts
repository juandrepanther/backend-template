import { Router } from 'express'

export const login = Router()

login.get('/', (req, res, next) => {
  console.log('Yes')
  res.status(200).json({ answer: 'done' })
  next()
})

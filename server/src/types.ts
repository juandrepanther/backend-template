import { Request } from 'express'

export interface IAdmin {
  username: string
  password: string
}

export interface AuthenticatedRequest extends Request {
  username?: string
}

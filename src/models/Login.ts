import mongoose, { Schema } from 'mongoose'
import { IAdmin } from '../types'

const adminSchema = new Schema<IAdmin>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export const Admin = mongoose.model('Admin', adminSchema)

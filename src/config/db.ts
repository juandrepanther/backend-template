import mongoose from 'mongoose'

const db_url = process.env.MONGO_URI

export async function connect() {
  await mongoose
    .connect(db_url, { dbName: 'backend-template-database' })
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((err) => {
      console.log('No connection with MongoDB - ', err)
      process.exit(1)
    })
}

import { config } from 'dotenv'
config()
import express from 'express'
import { connect } from './config/db'
import { router } from './router'

const app = express()
const port = process.env.PORT

app.use(express.json())

// connect to MongoDB
connect()

// routes
app.use(router)

// start the server
app.listen(port, () => console.log(`Server is running on port: ${port}`))

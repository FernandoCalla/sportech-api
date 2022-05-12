import mongoose from 'mongoose'

export default function connectDb() {
  const url = "mongodb://localhost:27017/sportech-api"

  mongoose.connect(url, {
    useNewUrlParser: true
  })

  mongoose.connection.on('error', (error) => {
    log.error(error)
  })
}

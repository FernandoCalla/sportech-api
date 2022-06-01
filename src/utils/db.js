import mongoose from 'mongoose'

export default function connectDb() {
  const url = `mongodb+srv://SporTech:${process.env.MONGO_ATLAS}@cluster0.qvpevds.mongodb.net/SporTech?retryWrites=true&w=majority`

  mongoose.connect(url, {
    useNewUrlParser: true
  })

  mongoose.connection.on('error', (error) => {
    console.error(error)
  })
}

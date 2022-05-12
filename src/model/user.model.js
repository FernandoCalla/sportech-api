import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: { type: String,validate:/\S+@\S+\.\S+/, required: true, unique: true },
    password: { type: String,validate: /\S+/, required: true },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User

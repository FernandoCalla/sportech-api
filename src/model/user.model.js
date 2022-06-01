import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: { type: String,validate:/\S+@\S+\.\S+/, required: true, unique: true },
    password: { type: String,validate: /\S+/, required: true },
    rol:{ type:Number ,required:true } // 0 admin 1 team 2 member
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User

import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true,  },
    lastName: { type: String, required: true },
    secondName: { type: String, required: true },
    dni:{type: Number, required: true},
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User", required: true}

  },
  { timestamps: true }
)

const Admin = mongoose.model('Admin', adminSchema)

export default Admin

import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true,  },
    lastName: { type: String, required: true },
    surName: { type: String, required: true },
    dni:{type: Number, required: true},    
    photo:{type: String},
    photoIdCloudinary:{type: String},
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User", required: true}

  },
  { timestamps: true }
)

const Admin = mongoose.model('Admin', adminSchema)

export default Admin

import mongoose from 'mongoose'

const sportSchema = new mongoose.Schema(
  {
    denomination: { type: String, required: true,  },
  },
  { timestamps: true }
)

const Sport = mongoose.model('Sport', sportSchema)

export default Sport

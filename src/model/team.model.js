import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema(
  {
    denomination: { type: String, required: true,  },
    description: { type: String},
    players: [{type:mongoose.Schema.Types.ObjectId,ref:"Member"}],
    trainers: [{type:mongoose.Schema.Types.ObjectId,ref:"Member"}],
    sport: {type:mongoose.Schema.Types.ObjectId,ref:"Sport", required: true},
    photo: { type: String},
    photoIdCloudinary: { type: String},
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User", required: true},
  },
  { timestamps: true }
)

const Team = mongoose.model('Team', teamSchema)

export default Team
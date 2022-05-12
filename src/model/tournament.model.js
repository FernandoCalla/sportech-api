import mongoose from 'mongoose'

const tournamentSchema = new mongoose.Schema(
  {
    denomination: { type: String, required: true,  },
    description: { type: String},
    teams: [{type:mongoose.Schema.Types.ObjectId,ref:"Team"}],
    registrationStartDate : {type: Date, required:true},
    registrationEndDate: {type: Date, required:true},
    tournamentStartDate: {type: Date, required:true},
    tournamentEndDate: {type: Date, required:true},
    sport: {type:mongoose.Schema.Types.ObjectId,ref:"Sport", required: true},
  },
  { timestamps: true }
)

const Tournament = mongoose.model('Tournament', tournamentSchema)

export default Tournament
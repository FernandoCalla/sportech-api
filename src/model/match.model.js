import mongoose from 'mongoose'

const matchSchema = new mongoose.Schema(
  {
    dateTime: { type: Date, required: true,  },
    teamA: {type:mongoose.Schema.Types.ObjectId,ref:"Team", required: true},
    teamB: {type:mongoose.Schema.Types.ObjectId,ref:"Team", required: true},
    location: {type: String, required: true},
    tournament :{type:mongoose.Schema.Types.ObjectId,ref:"Tournament", required: true},
    state: { type : Number, default: 0},//0 pendiente 1 en juego 2 finalizado
    teamAscore: { type : Number, default: 0}, 
    teamBscore: { type : Number, default: 0}
  },
  { timestamps: true }
)

const Match = mongoose.model('Match', matchSchema)

export default Match

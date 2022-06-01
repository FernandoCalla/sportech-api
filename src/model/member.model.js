import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true,  },
    lastName: { type: String, required: true },
    surName: { type: String, required: true },
    dni:{type: Number, required: true},
    age:{type: Number, required: true},
    photo:{type: String},
    photoIdCloudinary:{type: String},
    birthdate:{type:Date},
    height: {type: Number},
    gender: {type: String},
    sport: {type:mongoose.Schema.Types.ObjectId,ref:"Sport", required: true},
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User", required: true},
    state:{type:Number, default: 0}, //0 pending, 1 accept , 2 disabled
    typeMember:{type: Number, required: true}, //0 player 1 trainner
    comments:[{type: String}],
  },
  { timestamps: true }
)

const Member = mongoose.model('Member', memberSchema)

export default Member
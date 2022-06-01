import Team from '../model/team.model.js'
import cloudinary, { uploads } from '../utils/cloudinary.js'

export async function createTeam(input) {  
  const uploader = async (path) => await uploads(path, 'sportech-teams-images')
  try {
    const { url, cloudinaryId } = await uploader(input.file.path)
    const newData={...input.body,photo:url,photoIdCloudinary:cloudinaryId}
    const team = await Team.create(newData)
    return team
  } catch (error) {
    throw new Error(error)
  }
}
export async function findTeams() {
  const Teams= await Team.find({})
  for (const team of Teams) {
    await team.populate('sport')
  }
  return Teams 
}

export async function findTeamById(query) {
  const team= await Team.findById(query)
  return team 
}

export async function findTeamByIdAndAddTrainer(query,body) {
  const team= await Team.findById(query)
  const newTeam={
    ...team._doc,trainers:[...team.trainers,body.trainer]
  }
  const teamUpdated= await Team.findByIdAndUpdate(query,newTeam)
  return teamUpdated
}

export async function findTeamByIdAndAddPlayer(query,body) {
  const team= await Team.findById(query)
  const newTeam={
    ...team._doc,players:[...team.players,body.player]
  }
  const teamUpdated= await Team.findByIdAndUpdate(query,newTeam)
  return teamUpdated
}

export async function findTeamByIdUser(query) {
  const teams= await Team.find({user:query})
  for (const team of teams) {
    await team.populate('sport')
    await team.populate('players')
    await team.populate('trainers')
  }
  return teams
}

export async function findTeamByIdAndEdit(query,data) {
  const team= await Team.findByIdAndUpdate(query,data)
  return team 
}

export async function findTeamByIdAndDelete(query) {
  await Team.findByIdAndDelete(query)
  return "Team deleted"
}





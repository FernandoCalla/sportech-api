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
  return Teams 
}

export async function findTeamById(query) {
  const team= await Team.findById(query)
  return team 
}

export async function findTeamByIdAndEdit(query,data) {
  const team= await Team.findByIdAndUpdate(query,data)
  return team 
}

export async function findTeamByIdAndDelete(query) {
  await Team.findByIdAndDelete(query)
  return "Team deleted"
}





import Tournament from '../model/tournament.model.js'
import cloudinary, { uploads } from '../utils/cloudinary.js'

export async function createTournament(input) {
  const uploader = async (path) => await uploads(path, 'sportech-tournaments-images')
  try {
    const { url, cloudinaryId } = await uploader(input.file.path)
    const newData={...input.body,photo:url,photoIdCloudinary:cloudinaryId}
    const tournament = await Tournament.create(newData)
    return tournament
  } catch (error) {
    throw new Error(error)
  }
}
export async function findTournaments() {
  const tournaments= await Tournament.find({})
  for (const tournament of tournaments) {
    await tournament.populate('sport')
  }
  return tournaments 
}

export async function findTournamentById(query) {
  const tournament= await Tournament.findById(query)
  await tournament.populate('teams')
  await tournament.populate('sport')
  return tournament
}

export async function findTournamentByIdAndEdit(query,data) {
  const tournament= await Tournament.findByIdAndUpdate(query,data)
  return tournament 
}

export async function findTournamentByIdAndAddTeam(query,data) {
  const tournament= await Tournament.findById(query)
  const teams =[...tournament.teams].concat(data.team)
  const newTournament={...tournament._doc,teams:teams}
  const tournamentUpdated= await Tournament.findByIdAndUpdate(query,newTournament)
  return tournamentUpdated
}

export async function findTournamentByIdAndDelete(query) {
  await Tournament.findByIdAndDelete(query)
  return "Tournament deleted"
}





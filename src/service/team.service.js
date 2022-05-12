import Team from '../model/team.model.js'

export async function createTeam(input) {
  try {
    const team = await Team.create(input)
    return team
  } catch (error) {
    throw new Error(errorMessage)
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





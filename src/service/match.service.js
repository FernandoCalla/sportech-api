import Match from '../model/match.model.js'

export async function createMatch(input) {
  try {
    const match = await Match.create(input)
    return match
  } catch (error) {
    throw new Error(errorMessage)
  }
}
export async function findMatchs() {
  const matchs= await Match.find({})
  return matchs 
}

export async function findMatchById(query) {
  const matchs= await Match.findById(query)
  return matchs 
}

export async function findMatchByTournament(query) {
  const matchs= await Match.find({tournament:query})
  for (const match of matchs) {
    await match.populate("teamA")
    await match.populate("teamB")
    await match.populate("tournament")
  }
  return matchs 
}

export async function findMatchByTeam(query) {
  const matchsLocal= await Match.find({teamA:query})
  for (const match of matchsLocal) {
    await match.populate("teamA")
    await match.populate("teamB")
    await match.populate("tournament")
  }
  const matchsVisitante= await Match.find({teamB:query})
  for (const match of matchsVisitante) {
    await match.populate("teamA")
    await match.populate("teamB")
    await match.populate("tournament")
  }
  const matchs={
    local:matchsLocal,
    visitante:matchsVisitante
  }
  return matchs 
}

export async function findMatchByIdAndEdit(query,data) {
  const match= await Match.findByIdAndUpdate(query,data)
  return match 
}

export async function findMatchByIdAndDelete(query) {
  await Match.findByIdAndDelete(query)
  return "Match deleted"
}





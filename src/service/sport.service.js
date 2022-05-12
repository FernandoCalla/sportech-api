import Sport from '../model/sport.model.js'

export async function createSport(input) {
  try {
    const sport = await Sport.create(input)
    return sport
  } catch (error) {
    throw new Error(errorMessage)
  }
}
export async function findSports() {
  const sports= await Sport.find({})
  return sports 
}

export async function findSportById(query) {
  const sport= await Sport.findById(query)
  return sport 
}

export async function findSportByIdAndEdit(query,data) {
  const sport= await Sport.findByIdAndUpdate(query,data)
  return sport 
}

export async function findSportByIdAndDelete(query) {
  await Sport.findByIdAndDelete(query)
  return "Sport deleted"
}





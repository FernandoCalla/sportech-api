import { createSport, findSportById, findSportByIdAndDelete, findSportByIdAndEdit, findSports } from '../service/sport.service.js'

export async function createSportHandler(req, res) {
  try {
    const sport = await createSport(req.body)
    res.status(201).json({ message: 'Sport created', sport })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findSportsHandler(req, res) {
  try {
    const sports = await findSports()
    res.status(200).json({ message: 'Sports retrived', sports })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findSportByIdHandler(req, res) {
  try {
    const sport = await findSportById(req.params.id)
    res.status(200).json({ message: 'Sport retrived', sport})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findSportByIdAndEditHandler(req, res) {
  try {
    const sport = await findSportByIdAndEdit(req.params.id)
    res.status(200).json({ message: 'Sport edited', sport })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findSportByIdAndDeleteHandler(req, res) {
  try {
    const message = await findSportByIdAndDelete(req.params.id)
    res.status(200).json({ message})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

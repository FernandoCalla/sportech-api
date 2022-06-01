import { createMatch, findMatchById, findMatchByIdAndDelete, findMatchByIdAndEdit, findMatchByTeam, findMatchByTournament, findMatchs } from '../service/match.service.js'

export async function createMatchHandler(req, res) {
  try {
    const match = await createMatch(req.body)
    res.status(201).json({ message: 'Match created', match })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMatchsHandler(req, res) {
  try {
    const matchs = await findMatchs()
    res.status(200).json({ message: 'Match retrived', matchs })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMatchByIdHandler(req, res) {
  try {
    const match = await findMatchById(req.params.id)
    res.status(200).json({ message: 'Match retrived', match})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMatchsByTournamentHandler(req, res) {
  try {
    const matchs = await findMatchByTournament(req.params.id)
    res.status(200).json({ message: 'Matchs retrived', matchs})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMatchsByTeamHandler(req, res) {
  try {
    const matchs = await findMatchByTeam(req.params.id)
    res.status(200).json({ message: 'Matchs retrived by team', matchs})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMatchByIdAndEditHandler(req, res) {
  try {
    const match = await findMatchByIdAndEdit(req.params.id)
    res.status(200).json({ message: 'Match edited', match })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findMatchByIdAndDeleteHandler(req, res) {
  try {
    const message = await findMatchByIdAndDelete(req.params.id)
    res.status(200).json({ message})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

import { createTournament, findTournamentById, findTournamentByIdAndAddTeam, findTournamentByIdAndDelete, findTournamentByIdAndEdit, findTournaments } from '../service/tournament.service.js'

export async function createTournamentHandler(req, res) {
  try {
    const tournament = await createTournament(req)
    res.status(201).json({ message: 'Tournament created', tournament })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTournamentsHandler(req, res) {
  try {
    const tournaments = await findTournaments()
    res.status(200).json({ message: 'Tournament retrived', tournaments })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTournamentByIdHandler(req, res) {
  try {
    const tournament = await findTournamentById(req.params.id)
    res.status(200).json({ message: 'Tournament retrived', tournament})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTournamentByIdAndEditHandler(req, res) {
  try {
    const tournament = await findTournamentByIdAndEdit(req.params.id)
    res.status(200).json({ message: 'Tournament edited', tournament })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTournamentByIdAndAddTeamtHandler(req, res) {
  try {
    const tournament = await findTournamentByIdAndAddTeam(req.params.id,req.body)
    res.status(200).json({ message: 'TTeam added', tournament })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTournamentByIdAndDeleteHandler(req, res) {
  try {
    const message = await findTournamentByIdAndDelete(req.params.id)
    res.status(200).json({ message})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

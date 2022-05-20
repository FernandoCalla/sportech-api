import { createTeam, findTeamById, findTeamByIdAndDelete, findTeamByIdAndEdit, findTeams } from '../service/team.service.js'

export async function createTeamHandler(req, res) {
  try {
    const team = await createTeam(req)
    res.status(201).json({ message: 'Team created', team })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTeamsHandler(req, res) {
  try {
    const teams = await findTeams()
    res.status(200).json({ message: 'Teams retrived', teams })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTeamByIdHandler(req, res) {
  try {
    const team = await findTeamById(req.params.id)
    res.status(200).json({ message: 'Team retrived', team})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTeamByIdAndEditHandler(req, res) {
  try {
    const team = await findTeamByIdAndEdit(req.params.id)
    res.status(200).json({ message: 'Team edited', team })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findTeamByIdAndDeleteHandler(req, res) {
  try {
    const message = await findTeamByIdAndDelete(req.params.id)
    res.status(200).json({ message})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

import { Router } from 'express'
import { createTournamentHandler, findTournamentByIdAndDeleteHandler, findTournamentByIdAndEditHandler,findTournamentByIdAndAddTeamtHandler ,findTournamentByIdHandler, findTournamentsHandler } from '../controller/tournament.controller.js'
import { upload } from '../utils/multer.js'

const tournamentRouter = Router()

tournamentRouter.post('/api/tournament',upload.single("photo"), createTournamentHandler)
tournamentRouter.get('/api/tournament',findTournamentsHandler)
tournamentRouter.get('/api/tournament/:id',findTournamentByIdHandler)
tournamentRouter.put('/api/tournament/:id',findTournamentByIdAndEditHandler)
tournamentRouter.put('/api/tournament/team/:id',findTournamentByIdAndAddTeamtHandler)
tournamentRouter.delete('/api/tournament/:id',findTournamentByIdAndDeleteHandler)

export default tournamentRouter

import { Router } from 'express'
import { createMatchHandler, findMatchByIdAndDeleteHandler, findMatchByIdAndEditHandler, findMatchByIdHandler, findMatchsByTeamHandler, findMatchsByTournamentHandler, findMatchsHandler } from '../controller/match.controller.js'

const matchRouter = Router()

matchRouter.post('/api/match', createMatchHandler)
matchRouter.get('/api/match',findMatchsHandler)
matchRouter.get('/api/match/:id',findMatchByIdHandler)
matchRouter.get('/api/match/tournament/:id',findMatchsByTournamentHandler)
matchRouter.get('/api/match/team/:id',findMatchsByTeamHandler)
matchRouter.put('/api/match/:id',findMatchByIdAndEditHandler)
matchRouter.delete('/api/match/:id',findMatchByIdAndDeleteHandler)

export default matchRouter

import { Router } from 'express'
import { createTeamHandler, findTeamByIdAndDeleteHandler, findTeamByIdAndEditHandler, findTeamByIdHandler, findTeamsHandler } from '../controller/team.controller.js'

const teamRouter = Router()

teamRouter.post('/api/team', createTeamHandler)
teamRouter.get('/api/team',findTeamsHandler)
teamRouter.get('/api/team/:id',findTeamByIdHandler)
teamRouter.put('/api/team/:id',findTeamByIdAndEditHandler)
teamRouter.delete('/api/team/:id',findTeamByIdAndDeleteHandler)

export default teamRouter

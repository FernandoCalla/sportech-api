import { Router } from 'express'
import { upload } from '../utils/multer.js'
import { createTeamHandler, findTeamByIdAndAddPlayerHandler, findTeamByIdAndAddTrainerHandler, findTeamByIdAndDeleteHandler, findTeamByIdAndEditHandler, findTeamByIdHandler, findTeamByIdUserHandler, findTeamsHandler } from '../controller/team.controller.js'

const teamRouter = Router()

teamRouter.post('/api/team',upload.single("photo"),createTeamHandler)
teamRouter.get('/api/team',findTeamsHandler)
teamRouter.get('/api/team/:id',findTeamByIdHandler)
teamRouter.get('/api/team/user/:id',findTeamByIdUserHandler)
teamRouter.post('/api/team/player/:id',findTeamByIdAndAddPlayerHandler)
teamRouter.post('/api/team/trainer/:id',findTeamByIdAndAddTrainerHandler)
teamRouter.put('/api/team/:id',findTeamByIdAndEditHandler)
teamRouter.delete('/api/team/:id',findTeamByIdAndDeleteHandler)

export default teamRouter

import { Router } from 'express'
import { createSportHandler, findSportByIdAndDeleteHandler, findSportByIdAndEditHandler, findSportByIdHandler, findSportsHandler } from '../controller/sport.controller.js'

const sportRouter = Router()

sportRouter.post('/api/sport', createSportHandler)
sportRouter.get('/api/sport',findSportsHandler)
sportRouter.get('/api/sport/:id',findSportByIdHandler)
sportRouter.put('/api/sport/:id',findSportByIdAndEditHandler)
sportRouter.delete('/api/sport/:id',findSportByIdAndDeleteHandler)

export default sportRouter

import { Router } from 'express'
import {
  createUserHandler,
  findUsersHandler,
  findUsersByIdHandler
} from '../controller/user.controller.js'

const userRouter = Router()

userRouter.post('/api/user', createUserHandler)
userRouter.get('/api/user',findUsersHandler)
userRouter.get('/api/user/:id',findUsersByIdHandler)

export default userRouter

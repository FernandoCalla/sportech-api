import { Router } from 'express'
import { createMemberHandler, findMemberByIdAndDeleteHandler, findMemberByIdAndEditHandler, findMemberByIdHandler, findMembersHandler } from '../controller/member.controller.js'

const memberRouter = Router()

memberRouter.post('/api/member', createMemberHandler)
memberRouter.get('/api/member',findMembersHandler)
memberRouter.get('/api/member/:id',findMemberByIdHandler)
memberRouter.put('/api/member/:id',findMemberByIdAndEditHandler)
memberRouter.delete('/api/member/:id',findMemberByIdAndDeleteHandler)

export default memberRouter

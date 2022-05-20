import { Router } from 'express'
import { createMemberHandler, findMemberByIdAndDeleteHandler, findMemberByIdAndEditHandler, findMemberByIdHandler, findMembersHandler } from '../controller/member.controller.js'
import { upload } from '../utils/multer.js'
const memberRouter = Router()

memberRouter.post('/api/member',upload.single("photo"),  createMemberHandler )
memberRouter.get('/api/member',findMembersHandler)
memberRouter.get('/api/member/:id',findMemberByIdHandler)
memberRouter.put('/api/member/:id',findMemberByIdAndEditHandler)
memberRouter.delete('/api/member/:id',findMemberByIdAndDeleteHandler)

export default memberRouter

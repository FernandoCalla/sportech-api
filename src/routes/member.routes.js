import { Router } from 'express'
import { createMemberHandler, findMemberByIdAndAddCommentHandler, findMemberByIdAndDeleteHandler, findMemberByIdAndEditHandler, findMemberByIdHandler, findMemberByIdUserHandler, findMembersHandler } from '../controller/member.controller.js'
import { upload } from '../utils/multer.js'
const memberRouter = Router()

memberRouter.post('/api/member',upload.single("photo"),  createMemberHandler )
memberRouter.get('/api/member',findMembersHandler)
memberRouter.get('/api/member/:id',findMemberByIdHandler)
memberRouter.get('/api/member/user/:id',findMemberByIdUserHandler)
memberRouter.put('/api/member/:id',findMemberByIdAndEditHandler)
memberRouter.post('/api/member/comment/:id',findMemberByIdAndAddCommentHandler)
memberRouter.delete('/api/member/:id',findMemberByIdAndDeleteHandler)

export default memberRouter

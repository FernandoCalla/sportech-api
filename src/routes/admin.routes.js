import { Router } from 'express'
import { upload } from '../utils/multer.js'
import { createAdminHandler, findAdminByIdAndDeleteHandler, findAdminByIdAndEditHandler, findAdminByIdHandler, findAdminByIdUserHandler, findAdminsHandler } from '../controller/admin.controller.js'

const adminRouter = Router()

adminRouter.post('/api/admin',upload.single("photo"), createAdminHandler)
adminRouter.get('/api/admin',findAdminsHandler)
adminRouter.get('/api/admin/:id',findAdminByIdHandler)
adminRouter.get('/api/admin/user/:id',findAdminByIdUserHandler)
adminRouter.put('/api/admin/:id',findAdminByIdAndEditHandler)
adminRouter.delete('/api/admin/:id',findAdminByIdAndDeleteHandler)

export default adminRouter

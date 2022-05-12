import { Router } from 'express'
import { createAdminHandler, findAdminByIdAndDeleteHandler, findAdminByIdAndEditHandler, findAdminByIdHandler, findAdminsHandler } from '../controller/admin.controller.js'

const adminRouter = Router()

adminRouter.post('/api/admin', createAdminHandler)
adminRouter.get('/api/admin',findAdminsHandler)
adminRouter.get('/api/admin/:id',findAdminByIdHandler)
adminRouter.put('/api/admin/:id',findAdminByIdAndEditHandler)
adminRouter.delete('/api/admin/:id',findAdminByIdAndDeleteHandler)

export default adminRouter

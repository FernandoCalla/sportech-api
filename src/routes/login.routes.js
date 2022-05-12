import { Router } from 'express'
import {
    loginHandler
} from '../controller/login.controller.js'

const loginRouter = Router()

loginRouter.post('/auth/login', loginHandler)


export default loginRouter
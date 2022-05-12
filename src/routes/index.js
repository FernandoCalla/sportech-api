import adminRouter from './admin.routes.js'
import loginRouter from './login.routes.js'
import memberRouter from './member.routes.js'
import sportRouter from './sports.routes.js'
import teamRouter from './team.routes.js'
import userRouter from './user.routes.js'

function routes(app) {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the SporTech'
    })
  )
  app.use(loginRouter)
  app.use(userRouter)
  app.use(adminRouter)
  app.use(sportRouter)
  app.use(teamRouter)
  app.use(memberRouter)
}

export default routes
import 'dotenv/config'
import express,{json} from "express";
import http from 'http'
import connectDb from "./utils/db.js";
import routes from './routes/index.js'
import cors from 'cors';

let app = express();
const port=4000
const server = http.createServer(app)

app.use(json())
app.use(cors())
// app.use(deserializeUser)

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
  connectDb()
  routes(app)
})

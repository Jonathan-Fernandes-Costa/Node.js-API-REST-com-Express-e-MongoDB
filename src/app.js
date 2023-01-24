import express from 'express'
import db from './bdconfig/mongoconfig.js'
import routes from './routes/index.js'
db.on("error", console.log.bind(console, "Erro de conexão com o banco de dados"))
db.once("open", ()=> {console.log("Conexão com o banco de dados estabelecida")})

const app = express()
app.use(express.json())
routes(app)

export default app
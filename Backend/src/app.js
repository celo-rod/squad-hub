import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()

app.use(cors());
// Configuração para o express entender requisições com o corpo em JSON
app.use(express.json())

// Usa as rotas da aplicação
app.use(routes)

export default app
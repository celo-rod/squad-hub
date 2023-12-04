import { Router } from 'express'
import FuncionarioController from './app/controllers/FuncionarioController.js'
import ProjetoController from './app/controllers/ProjetoController.js'
import SquadController from './app/controllers/SquadController.js'
import UsuarioController from './app/controllers/UsuarioController.js'
import ensureAuthenticated from './app/middlewares/auth.js'

const router = Router()

// Rotas da aplicação
router.post('/login', UsuarioController.login)
router.post('/registrar', UsuarioController.register)

router.post('/funcionarios', ensureAuthenticated, FuncionarioController.store)
router.get('/funcionarios', ensureAuthenticated, FuncionarioController.index)
router.get('/funcionarios/:cpf', ensureAuthenticated, FuncionarioController.show)
router.put('/funcionarios/:cpf', ensureAuthenticated, FuncionarioController.update)
router.delete('/funcionarios/:cpf', ensureAuthenticated, FuncionarioController.delete)

router.post('/projetos', ensureAuthenticated, ProjetoController.store)
router.get('/projetos', ensureAuthenticated, ProjetoController.index)
router.get('/projetos/:id', ensureAuthenticated, ProjetoController.show)
router.put('/projetos/:id', ensureAuthenticated, ProjetoController.update)
router.delete('/projetos/:id', ensureAuthenticated, ProjetoController.delete)

router.post('/squads', ensureAuthenticated, SquadController.store)
router.get('/squads', ensureAuthenticated, SquadController.index)
router.get('/squads/:id', ensureAuthenticated, SquadController.show)
router.put('/squads/:id', ensureAuthenticated, SquadController.update)
router.delete('/squads/:id', ensureAuthenticated, SquadController.delete)

export default router


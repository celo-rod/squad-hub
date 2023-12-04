import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import UsuarioRepository from '../repositories/UsuarioRepository.js'
import dotenv from 'dotenv'

dotenv.config()

class UsuarioController{
    async register(req, res) {
        const { login, senha, papel } = req.body
        const senhaHashed = bcrypt.hashSync(senha, 8)
        const usuario = { login, senha: senhaHashed, papel }
        const id = await UsuarioRepository.create(usuario)
        res.json({ message: 'Usuário criado com sucesso', id })
    }

    async login(req, res) {
        const { login, senha } = req.body
        const usuario = await UsuarioRepository.findByLogin(login)
        if (usuario.length === 0) {
            return res.status(400).json({ error: 'Usuário não encontrado' })
        }
        if (!bcrypt.compareSync(senha, usuario[0].senha)) {
            return res.status(400).json({ error: 'Senha incorreta' })
        }
        const token = jwt.sign({ id: usuario[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.json({ message: 'Login bem-sucedido', token, papel: usuario[0].papel })
    }
}

export default new UsuarioController()
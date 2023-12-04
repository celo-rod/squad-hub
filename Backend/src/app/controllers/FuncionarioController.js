import FuncionarioRepository from '../repositories/FuncionarioRepository.js'

class FuncionarioController{
    async index(req, res){
        const row = await FuncionarioRepository.findAll()
        res.json(row)
    }

    async show(req, res){
        const cpf = req.params.cpf
        const row = await FuncionarioRepository.findByCpf(cpf)
        res.json(row)
    }
    
    async store(req, res){
        const funcionario = req.body
        const row = await FuncionarioRepository.create(funcionario)
        res.json(row)
        
    }
    
    async update(req, res){
        const cpf = req.params.cpf
        const funcionario = req.body
        const row = await FuncionarioRepository.update(funcionario, cpf)
        res.json(row)
    }
    
    async delete(req, res){
        const cpf = req.params.cpf
        const row = await FuncionarioRepository.delete(cpf)
        res.json(row)
    }
}

export default new FuncionarioController()

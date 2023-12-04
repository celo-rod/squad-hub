import ProjetoRepository from '../repositories/ProjetoRepository.js'

class ProjetoController{
    async index(req, res){
        const row = await ProjetoRepository.findAll()
        res.json(row)
    }

    async show(req, res){
        const id = req.params.id
        const row = await ProjetoRepository.findById(id)
        res.json(row)
    }
    
    async store(req, res){
        const projeto = req.body
        const row = await ProjetoRepository.create(projeto)
        res.json(row)
        
    }
    
    async update(req, res){
        const id = req.params.id
        const projeto = req.body
        const row = await ProjetoRepository.update(projeto, id)
        res.json(row)
    }
    
    async delete(req, res){
        const id = req.params.id
        const row = await ProjetoRepository.delete(id)
        res.json(row)
    }
}

export default new ProjetoController()
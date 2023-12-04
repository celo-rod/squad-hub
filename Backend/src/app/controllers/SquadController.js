import SquadRepository from '../repositories/SquadRepository.js'

class SquadController {
    async index(req, res) {
        const rows = await SquadRepository.findAll()
        res.json(rows)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await SquadRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const squad = req.body
        const row = await SquadRepository.create(squad)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const squad = req.body
        const row = await SquadRepository.update(squad, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await SquadRepository.delete(id)
        res.json(row)
    }
}

export default new SquadController()
import ClubeRepository from '../repositories/ClubeRepository.js';

class ClubeController {
    async index(req, res){
        const row = await ClubeRepository.findAll();
        res.json(row);
    }

    async showByIdOrName(req, res){
        const row = await ClubeRepository.findByKey(req.params.id_ou_nome);
        res.json(row);
    }

    async showBySerie(req, res){
        const row = await ClubeRepository.findBySerie(req.params.serie);
        res.json(row);
    }
}

export default new ClubeController();

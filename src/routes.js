import ClubeController from './controllers/ClubeController.js';
import { Router } from 'express';

const router = new Router();

// ROTAS
router.get('/clube', ClubeController.index);
router.get('/clube/:id_ou_nome', ClubeController.show);

export default router;

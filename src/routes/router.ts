const router = require('express').Router()
import { Request, Response } from 'express';
const clientsController = require('../controllers/clients')

router.get('/', async (req: Request, res: Response) => {
    clientsController.getClients(res);
})

router.get('/:id', async (req: Request, res: Response) => {
    clientsController.getClientsByID(res, req.params.id);
})

router.post('/', async (req: Request, res: Response) => {
    clientsController.postClient(req, res);
})

router.patch('/:id', async (req: Request, res: Response) => {
    clientsController.pathClient(req, res, req.params.id);
})

router.delete('/:id', async (req: Request, res: Response) => {
    clientsController.deleteClient(res, req.params.id);
})

module.exports = router
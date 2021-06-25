const {OracleDatabase} = require('../../database/clients')
const validate = require('./validate')
const Client = require('../../models/clients')
import { Request, Response } from 'express';

module.exports = {
    getClients(res: Response){
        try{
            OracleDatabase.getClients();
            return res.status(200).send(JSON.stringify({Mensagem: 'Clientes encontrados'}));
        }catch(e){
            return res.status(500).send(JSON.stringify({erro: 'Erro ao buscar os clientes'}));
        }
    },

    getClientsByID(res: Response, id: Number){
        try{
            validate.isNumber(id);
            OracleDatabase.getClientByID(id);
            return res.status(200).send(JSON.stringify({Mensagem: `Cliente com id = ${id} encontrados`}));
        }catch(e){
            return res.status(500).send(JSON.stringify({erro: 'Erro ao buscar os clientes', mensagem: e.message}));
        }
    },

    postClient(req: Request, res: Response){
        try{
            const {name, age, email} = req.body;
            validate.isNumber(age);
            const client = new Client(name, Number(age), email);
            OracleDatabase.postClient(client);
            return res.status(201).send(JSON.stringify({name: client.name, age: client.age, email: client.email}));
        }catch(e){
            return res.status(500).send(JSON.stringify({erro: e.message}));
        }
    },

    pathClient(req: Request, res: Response, id: Number){
        try{
            const {name, age, email} = req.body;
            validate.isNumber(age);
            const client = new Client(name, Number(age), email, id);
            OracleDatabase.patchClient(client)
            return res.status(201).send(JSON.stringify({name: client.name, age: client.age, email: client.email, id: client.id}));
        }catch(e){
            return res.status(500).send(JSON.stringify({erro: e.message}));
        }
    },

    deleteClient(res: Response, id: Number){
        try{
            validate.isNumber(id);
            OracleDatabase.deleteClient(Number(id));
            return res.status(200).send(JSON.stringify({mensagem: `ID ${id} deletado`}))
        }catch(e){
            return res.status(500).send(JSON.stringify({erro: e.message}));
        }
    }
}
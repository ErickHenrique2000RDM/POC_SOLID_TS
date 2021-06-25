

class Database{
    static getClients(){
        // Busca no banco de dados
    }

    static getClientByID(id: Number){
        // Busca no banco de dados
    }

    static postClient(){
        // Adiciona cliente no banco de dados
    }

    static patchClient(client: Object){
        // Atualiza o cliente
    }

    static deleteClient(id: Number){
        // Deleta o cliente
    }
}

class OracleDatabase extends Database{    
    static getClients(){
        // Busca no banco de dados Oracle
        console.log('Banco de dados Oracle');
    }

    static getClientByID(id: Number){
        // Busca no banco de dados Oracle
        console.log('Banco de dados Oracle');
    }

    static postClient(){
        // Adiciona cliente no banco de dados Oracle
        console.log('Banco de dados Oracle');
    }

    static patchClient(client: Object){
        // Atualiza o cliente Oracle
        console.log('Banco de dados Oracle');
    }

    static deleteClient(id: Number){
        // Deleta o cliente Oracle
        console.log('Banco de dados Oracle');
    }
}

class MySQLDatabase extends Database{    
    static getClients(){
        // Busca no banco de dados MySQL
        console.log('Banco de dados MySQL');
    }

    static getClientByID(id: Number){
        // Busca no banco de dados MySQL
        console.log('Banco de dados MySQL');
    }

    static postClient(){
        // Adiciona cliente no banco de dados MySQL
        console.log('Banco de dados MySQL');
    }

    static patchClient(client: Object){
        // Atualiza o cliente MySQL
        console.log('Banco de dados MySQL');
    }

    static deleteClient(id: Number){
        // Deleta o cliente MySQL
        console.log('Banco de dados MySQL');
    }
}

module.exports = {OracleDatabase, MySQLDatabase}
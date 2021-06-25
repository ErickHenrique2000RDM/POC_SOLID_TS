class Client{
    name: String;
    age: Number;
    email: String;
    id: Number;
    constructor(name: String, age: Number, email: String, id: Number){
        this.name = name;
        this.age = age;
        this.email = email;
        this.id = id;
    }
}

module.exports = Client;
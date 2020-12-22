// constructor pattern
class Person {
    constructor(name, email) {
        this.name=name;
        this.email=email;
    }
}


class Client extends Person {
    
    constructor(name, email, company){
        super(name, email);
        this.company = company;
    }

}

const client = new Client('Jesús' , 'jacv00@hotmail.com', 'Chaviweb');

console.log(client);
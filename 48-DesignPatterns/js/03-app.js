// singleton

let instance = null;

class Person {
    constructor (name, email) {
       if (!instance) {
        this.name = name;
        this.email = email;
        instance = this;
       }
    }
}

const person = new Person('Jesús', 'jacv00@hotmail.com');
console.log(person);

const person2 = new Person('Jesús Alberto', 'jcharris.villa@gmail.com');
console.log(person2);


this.name = 'Windows';

const person = {
	name: 'Jesús',
	greeting: function(){
		console.log(`Hola ${this.name}`);
	}
}

const person2 = {
	greeting: person.greeting.bind(this)
}


person.greeting();
person2.greeting();
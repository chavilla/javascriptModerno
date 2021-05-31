// Implicit binding
const user = {
  name: "Jesús",
  age: 27,
  information() {
    console.log(`Nombre: ${this.name}, Edad: ${this.age}`);
  },
  pet: {
    name: "Chispy",
    age: 2,
    information() {
      console.log(`Nombre: ${this.name}, Edad: ${this.age}`);
    },
  },
};

/* user.pet.information(); */

// Explicit binding
function person(ele1, ele2) {
  console.log(`Mi nombre es ${this.name} y escucho ${ele1} y ${ele2}`);
}

const information = {
  name: "Juan",
};

const favoriteMusic = ["Rock", "Pop", "Electrónica"];

// using call function. a LIST of values must be passed
/* person.call(information, 'Vallenato', 'Merengue'); */

// using apply function. An array MUST BE passed.
/* person.apply(information, favoriteMusic); */

// using bind function
const personBinding = person.bind(information, 'Salsa', 'Bachata');
//personBinding();

/* ---------------------- Exercise 2 ------------------------------ */

function Human(gender) {
  this.gender = gender;
  this.isAlive = true;
}

function Person(gender, age) {
  // this = {  }
  Human.call(this, gender);
  // this = { ..., gender: 'male', isAlive: true }
  this.age = age;
  // this = { ..., gender: 'male', isAlive: true, age: 18 }
  return this;
}

const alberto = Person.call({},"male", 18);

//console.log(alberto);



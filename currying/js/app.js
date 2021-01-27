
// Currying es dividir una funcion que toma más de un argumento en argumentos parciales
const suma=(a,b,c)=>a+b+c;
//console.log(suma(3,3,4));

//Example 2
const partial = a => (b, c) => suma(a,b,c);
const first = partial(2);
const second = first(8,10);
console.log(second);

// Example 3
const partialExample3 = a => b => c => suma(a,b,c);
const num1Example3 = partialExample3(6);
const num2Example3 = num1Example3(4);
const num3Example3 = num2Example3(2);

console.log(num3Example3);

const resultExample3 = partialExample3(3)(2)(1);
console.log(resultExample3);



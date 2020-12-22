/* //Crear arreglos
const numeros=[3,6,7,10,50];
console.log(numeros);
//Unir dos arreglos
const numeros2=[60,90,100];
console.log(numeros.concat(numeros2));

//Otra forma
const meses=new Array('Enero','Marzo','Junio','Noviembre');
console.log(meses);

//MÉTODOS

//Ordenar un arreglo
meses.sort();
console.log(meses);
//Var el tamaño
console.log(meses.length);
//verificar si es arreglo
console.log(Array.isArray(meses));
//Encontrar un elemento
console.log(meses.indexOf('Marzo'));
//agegar al final del arreglo
meses.push('Agosto');
console.log(meses);
//Añadir al inicio
meses.unshift('Julio');
console.log(meses);
//Eliminar un elemento de un arreglo al final
meses.pop();
console.log(meses);
//Eliminar el primer elemento de un array
meses.shift();
console.log(meses);
//Eliminar elementos de un rango del medio
meses.splice(2,1);
console.log(meses);
//Revertir un arreglo
meses.reverse();
console.log(meses);

//Ordenar arrays de números
let ordenar=[3,41,23,17,87,56];
console.log(ordenar);
ordenar.sort();
console.log(ordenar);

//para ordenarlos de manera correcta
ordenar.sort((x,y)=>(x-y));
console.log(ordenar);
//Ordenarlo al revés
ordenar.sort((x,y)=>(y-x));
console.log(ordenar);
 */


 let array=['un elemento', 'dos elemento'];

 array=[...array, 'tres elementos'];

 console.log(array);
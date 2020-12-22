let palabra='Aprendiendo javascript para ser frontend';

console.log(palabra);
//Cantidad de letras
console.log(palabra.length);
//concatenar string usando la función concat
console.log(palabra.concat(' ','es importante.'));
//convertir en mayúsculas
console.log(palabra.toUpperCase());
//Buscar una palabra en especifico y el numero de indice en que se encuentra. cuenta los espacios
console.log(palabra.indexOf('javascript'));
// substring corta el caracter desde el primer numero indicado hasta el segundo
console.log(palabra.substring(0,11));
//Slice es parecido al substring. Si le pones negativo empieza al revés
console.log(palabra.slice(-10));
//Split busca los espacios en blanco y nos lo divide en un array. Podemos convertir una frase en un array
console.log(palabra.split(' '));
// replace reemplaza el texto del primer parametro para sustitutirlo por un segundo parámetro
console.log(palabra.replace('javascript','php'));
//Includes nos sirve para ver si una palabra o frase contiene el valor que le pasamos por parámetro
console.log(palabra.includes('param')); //En este caso devuelve false

palabra='javascript';
//repeat sirve para repetir palabbras el número de veces que se le pase
console.log(palabra.repeat(3));





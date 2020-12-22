
//Valida emails
const email=/^[a-zA-Z][a-z.A-Z0-9_-]+@{1}[a-z]+\.(com|net|org)$/gm;
const precios=/^\d+(,\d{3})*(\.\d{1,2})?$/gm;
const nombres_validos=/^[A-ZÁÉÍÓÚ]+\s{1}[A-ZÁÉÍÓÚáéíóú]+$/gim;
const imagenes=/\w+\.(png|jpg|jpeg)/;
const telefonos=null;

const regEx=email;

console.log(regEx.test('jcharris.villa@hola.org'));

import Persona from './persona.js';
import { cumpleAños } from './cumpleaños.js';

const persona=new Persona('Jesús',26,'masculino');
const cumplir=cumpleAños(persona.edad);
console.log(cumplir);



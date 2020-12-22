const cliente={
    nombre:'Jesús',
    edad:26,
    cargo:'Programador',
    cambiarNombre(nombre){
        this.nombre=nombre;
    },
    getNombre(){
        return this.nombre;
    }
}

//Otra forma de crear objetos

function Persona(nombre,edad,cargo){
    this.nombre=nombre;
    this.edad=edad;
    this.cargo=cargo;
    this.mayorEdad=function(inputEdad){
        if (this.edad>=18) {
            return 'Eres mayor de edad'
        }
        else{
            return 'Eres menor de edad'
        }
    }
}

const persona=new Persona('Juan',26,'Administrador');
const persona2=new Persona('Karen',30,'RRHH');
//console.log(persona2);

const personas={
    'datos1':persona,
    'datos2':persona2
}

console.log(personas);


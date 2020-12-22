const persona={
    nombre:'Jesús',
    apellido:'Charris',
    profesion:'Programador',
    email:'jcharris.villa@gmail.com',
    edad:26,
    musica:['vallenato','salsa','merengue'],
    hogar:{
        ciudad:'Penonomé',
        pais:'Panamá'
    },
    updateName(name){
        this.nombre=name
    }
}
console.log(persona);

//Crear arreglo de objetos
const autos=[
    {modelo:'Mustang',motor:30},
    {modelo:'Toyota',motor:50},
    {modelo:'Nissan',motor:40}
];

console.log(autos);

autos.forEach(auto=>{
    const {modelo,motor}=auto;
    console.log(modelo+' '+motor);
    
})
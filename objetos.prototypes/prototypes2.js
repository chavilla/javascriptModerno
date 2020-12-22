function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}

//Heredar prototypes
function Empresa(nombre,saldo,telefono,tipo){
    Cliente.call(this,nombre,saldo);
    this.telefono=telefono;
    this.tipo=tipo;
}

const cliente1=new Cliente('Jesús',750);
const empresa1=new Empresa('Udemy',30000,'018000359909','startup');

console.log(empresa1);


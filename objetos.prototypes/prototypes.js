function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}

//Crear un prototype
Cliente.prototype.aumentarSaldo=function(){
    this.saldo+=3000;
}

//Disminuir saldo
Cliente.prototype.disminuirSaldo=function(){
    this.saldo-=2000;
}

//Actualizar nombre
Cliente.prototype.setNombre=function(nombre){
    this.nombre=nombre;
}


const cliente1=new Cliente('Jesús',15000);
cliente1.aumentarSaldo();
//console.log(cliente1.saldo);
cliente1.disminuirSaldo();
//console.log(cliente1.saldo);
//console.log(cliente1);
cliente1.setNombre('Jorge');
//console.log(cliente1);





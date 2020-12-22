

(function(tecnologia){
    console.log(`Hola ${tecnologia}`);
    
})('javascript');

//Métodos de propiedad
//Cuando una funcion se pone dentro de un objeto
const musica={
    reproducir(){
        console.log('Reproduciendo música');
    }
}

musica.reproducir();
musica.pausar=function(){
    console.log('pausada');
}

musica.pausar();

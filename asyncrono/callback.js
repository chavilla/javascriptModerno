const paises=['Colombia','México','Panamá','Argentina','Brasil'];

// Call back que simula una llamada a la api.

function nuevoPais(pais,callback){
    setTimeout(()=>{
        paises.push(pais);
        callback();
    },2000)
}

function mostrarPaises(){
    setTimeout(()=>{
        let html='';
        paises.forEach(pais=>{
            html+=`<li>${pais}</li>`;
        })
        document.querySelector('.app').innerHTML=html;
    },2000)
}

mostrarPaises();
nuevoPais('Uruguay',mostrarPaises);
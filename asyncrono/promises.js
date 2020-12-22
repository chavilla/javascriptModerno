const descuento=false;

const esperar=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(descuento){
            resolve('Se ejecutó');
        }
        else{
            reject('No se ejecutó');
        }
    },4000)
}).then((msg)=>{
    console.log(msg);
}).catch(error=>console.log(error));
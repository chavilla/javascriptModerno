

const target=function(name,lastName){
    console.log(`Mi nombre es ${name} ${lastName}`);
    
}

const handler={
    apply: function(target,thisValue,args){
        console.log(`Se ha llamado la función ${target.name} con los parámetros ${args}
        ` );
        return target(...args);
    }
}

const miProxy=new Proxy(target,handler);

miProxy('Jesús','Charris');
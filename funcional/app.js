const inputs=document.querySelectorAll('input');
const boton=document.querySelector('button');
let datos={}



boton.addEventListener('click', mostrar)

function mostrar(e){
    e.preventDefault();
    console.log(datos);
    
}
inputs.forEach(input=>{
    input.addEventListener('change',(e)=>{
        datos={
            ...datos,
            [e.target.name]:e.target.value
        }
    })
})


const users=async ()=>{
    const resultados=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await resultados.json();
    addUsers(data)

}

function addUsers(users){
    
    const lista=document.querySelector('.lista');
    let li='';

    users.forEach(user => {
        li+=`${user.name}</br> `;
    });

    lista.innerHTML=li;

}

users();



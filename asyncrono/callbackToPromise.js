const countries=[];


const addCountry=country=>new Promise(resolve=>{
    setTimeout(()=>{
        countries.push(country);
        resolve(`Agregado ${country}`);
    },3000)
})

addCountry('Alemania')
.then(res=> {
    console.log(res, countries);
    return addCountry('Argentina')
})
.then(res=>{
    console.log(res, countries);
})


const autos = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2012,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Rojo",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
];

// SOME

/** Si encuentra al menos un resultado con esa condición */
//let resultado=autos.some(auto=> auto.modelo==='Camaro');

// FILTER

//filter trae todos los objetos que cumplen determinada condición
//let resultado = autos.filter((auto) => auto.year === 2017);
//let resultado=autos.filter(auto=>auto.transmision==="automatico");

//find Se tra el primer resultado que encuentre
//let resultado=autos.find(auto=>auto.color==='Azul');

//reduce hace una suma y recibe un valor inicial
//let resultado=autos.reduce((total,auto)=> total+ auto.precio,0);


/* segurosl = segurosl.filter(function ({ aseguradora_cot }) {
	return !this.has(aseguradora_cot) && this.add(aseguradora_cot);
}, new Set());
*/

let mejorPrecio = autos;

let primerMejorPrecio = false;
let primerMejorPrecioP = {};

const ordered =autos.sort(function (a, b) {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  //console.log(ordered[0]);

  let myObject = {
    name: 'Jesus'
  }

  if (Object.keys(myObject).length === 0) {
    console.log('Vacío'); 
  }else {
    console.log('Lleno');
  }

/* autos.forEach((seg) => {
  autos.forEach((seg2) => {
	if (seg.precio <= seg2.precio) {
	  if (primerMejorPrecioP && primerMejorPrecio == true) {
		if (seg.precio < primerMejorPrecioP.precio) {
		  primerMejorPrecio = true;
		  primerMejorPrecioP = seg;
		}
	  } else {
		primerMejorPrecio = true;
		primerMejorPrecioP = seg;
	  }
	}
  });
});
 */
//console.log(primerMejorPrecioP);
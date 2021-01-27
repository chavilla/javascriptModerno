/** Composition consiste en crear funciones que pueden ser compartidas por objetos diferente.
 *  La composition pemite crear funciones mas complejas a partir de otras
  */

/* Composition functions */
const getName = (info) => ({
  showName: () => {
    return info.name;
  },
});

const setName =(info) => ({
    setUpName : (name) => {
        info.name =name;
    }
});
/* End Composition functions */

/* Functions to create objects */
function Client(name, email, company) {
  let info = {
    name,
    email,
    company,
  };

  return Object.assign(
      info, 
      getName(info),
      setName(info)
      );
}

function Employee(name, email, position) {
  let info = {
    name,
    email,
    position,
  };

  return Object.assign(
      info, 
      getName(info),
      setName(info)
      );
}
/* End functions to create objects */

/* Demo */
const client1 = Client("Jesús", "jacv00@hotmail.com", "Chaviweb");
const employee1 = Employee("Luis", "lualchavi@hotmail.com", "Colegio Paris");
console.log(client1.showName());
console.log(employee1.showName());
client1.setUpName('Jesús Alberto');
console.log(client1.showName());

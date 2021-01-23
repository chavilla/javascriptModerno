// closure
const country = function (name) {
  let countryName = name;

  // set a name to countryName property
  function setName(name) {
    countryName = name;
  }

  // return the current Name of the property
  function getName() {
    console.log(countryName);
  }

  return {
    getName,
    setName,
  };
}; // end country

const { setName, getName } = country("Colombia");
setName("Bolivia");
getName();
setName('Uruguay');
getName();

// Example 2

const createOperation = function (x, type) {

    switch (type) {

        case 'suma':
            return function (y) {
                return x + y;
              };    

        case 'resta':
            return function(y) {
                return x - y;
            }
        default:
            throw new Error('Debes asignar una operación');
    }
};

try {
    const suma = createOperation(5, 'resta');
    console.log(suma(2));    
} catch (error) {
    alert(error);

}



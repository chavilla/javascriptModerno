
const elementos = {
  cc_select_aseguradora: "IS",
  cc_select_prima: "$82.66",
  cc_select_deducible: "$828.29",
};

const user = {};

for( const property in elementos) {
    user[property] = elementos[property];
}

console.log(user);
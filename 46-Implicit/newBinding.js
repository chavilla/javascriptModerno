function Auto(model, color) {
  this.model = model;
  this.color = color;
}

const auto = new Auto("2020", "Camaro");

console.log(auto);


// window binding

window.color = 'Blanco';

function greeter() {
  console.log(color);
}

greeter();
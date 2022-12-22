let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

for (let position of food) {
  console.log(position);
};

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let obj in names){
  console.log('Olá ' + names[obj]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let cars in car){
  console.log(cars + ':' + car[cars]);
}
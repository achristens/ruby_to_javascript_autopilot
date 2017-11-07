var getNewCar =  {
  "city":       "Toronto",
  "passengers": 0,
  "gas":        100
};
var abbysCar = getNewCar
var arisCar = getNewCar

var cars = [];

function addCar(new_car){
  cars.push(new_car);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}

addCar(abbysCar);
addCar(arisCar);
function pickUpPassenger(car){
  if (car.city === 'Toronto'){
    'Mississauga';
  } else if (car.city === 'Mississauga') {
    'London';
  } else if (car.city === 'London'){
    'Toronto';
  }
}


//
// console.log("Abby is in " + abbysCar.city);
// console.log("Ari has " + arisCar.passengers + " passengers");
// arisCar.passengers += 2
// console.log("Ari has " + arisCar.passengers + " passengers");
// arisCar.passengers += 2
// console.log("Ari has " + arisCar.passengers + " passengers");

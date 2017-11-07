function getNewCar(){
  var newCar =  {
    "city":       "Toronto",
    "passengers": 0,
    "gas":        100
  };
  return newCar;
}

var car1 = getNewCar();
var car2 = getNewCar();

var cars = [];

function addCar(new_car){
  cars.push(new_car);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}

addCar(car1);
addCar(car2);

function pickUpPassenger(car){
  car.passengers += 1;
  car.gas -= 10;
  console.log("Picked up passenger. Car now has " + car.passengers + " passengers.");
}

pickUpPassenger(car1);

function getDestination(car){
  if (car.city === 'Toronto'){
    return 'Mississauga';
  } else if (car.city === 'Mississauga') {
    return 'London';
  } else if (car.city === 'London'){
    return 'Toronto';
  }
}

function fillUpGas(car){
  var oldGas = car.gas;
  car.gas = 100;
  console.log("Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + ".");
}

function getGasDisplay(gasAmount){
  return gasAmount + "%";
}

function drive(car, cityDistance){
  if (car.gas < cityDistance) {
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  console.log("Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas) + ".");
}

drive(car1, 20);

function dropOffPassengers(car){
  previousPasengers = car.passengers;
  car.passengers    = 0;
  console.log("Dropped off " + previousPasengers + " passengers.");
}

dropOffPassengers(car1);
//
// console.log("Abby is in " + car1.city);
// console.log("Ari has " + car2.passengers + " passengers");
// car2.passengers += 2
// console.log("Ari has " + car2.passengers + " passengers");
// car2.passengers += 2
// console.log("Ari has " + car2.passengers + " passengers");

"use strict";

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
  return "Picked up passenger. Car now has " + car.passengers + " passengers.";
}

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
  return "Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + ".";
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
  return "Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas) + ".";
}


function dropOffPassengers(car){
  var previousPasengers = car.passengers;
  car.passengers    = 0;
  return "Dropped off " + previousPasengers + " passengers.";
}

function act(car){
  var distanceBetweenCities = 50;

  if (car.gas < 20){
    return fillUpGas(car);
  } else if (car.passengers < 3) {
    return pickUpPassenger(car);
  } else {
    if (car.gas < distanceBetweenCities){
      return fillUpGas(car);
    }
    var droveTo           = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + " " + passengersDropped;
  }
}

function commandFleet(cars){
  for (var number = 0; number < cars.length; number++){
    var action = act(cars[number]);
    var car = number + 1;
    var results = "Car " + car + ": " + action;
    console.log(results);
  }
  console.log("---");
}

commandFleet(cars);
//
// console.log("Abby is in " + car1.city);
// console.log("Ari has " + car2.passengers + " passengers");
// car2.passengers += 2
// console.log("Ari has " + car2.passengers + " passengers");
// car2.passengers += 2
// console.log("Ari has " + car2.passengers + " passengers");

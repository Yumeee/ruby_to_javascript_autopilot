function getNewCar(city, passengers) {
  var newCar={
    'city': city,
    'passengers': passengers,
    'gas': 100,
  }
  return newCar
}

console.log(getNewCar('Toronto', 0))

var cars = []
function addCar(cars, newCar) {
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now " + cars.length+ ".";
}

addCar(cars, getNewCar('Toronto', 1))
addCar(cars, getNewCar('Mississauga', 4))
console.log(cars);
// console.log(addCar(cars, getNewCar('Toronto, 0')));

function pickUpPassenger(car){
  car.passengers += 1;
  car.gas -= 10;
  return "Picked up passenger. Car now has " + car.passengers + " passengers.";
}

// console.log(pickUpPassenger(getNewCar('Toronto', 2)));

function getDestination(car) {
  if (car.city == 'Toronto') {
    return "Mississauga";
  }
  else if (car.city == 'Mississauga') {
    return "London";
  }
  else if (car.city == 'London') {
    return "Toronto";
  }
}

// console.log(getDestination(getNewCar('Mississauga', 2)));

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 10;
  return "Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + ".";
}

// console.log(fillUpGas(getNewCar('Toronto', 10)));

function getGasDisplay(gasAmount) {
  return gasAmount + "%";
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    return fillUpGas(car);
  }
  car.city = getDestination(car);
  car.gas -= cityDistance;
  return "Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas) + ". ";
}

console.log(drive(getNewCar('Toronto', 2), 10));

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return "Dropped off " + previousPassengers + " passengers."
}

console.log(dropOffPassengers(getNewCar('Toronto', 2)));

function act(car) {
  var distanceBetweenCities = 50;
  if (car.gas < 20) {
    fillUpGas(car);
  }
  else if (car.gas < 3) {
    pickUpPassenger(car);
  }
  else if (car.gas < distanceBetweenCities) {
    return fillUpGas(car)
  }
  droveTo = drive(car, distanceBetweenCities)
  var passengersDropped = dropOffPassengers(car);
  return droveTo + passengersDropped
}

// console.log(act(getNewCar('Toronto', 2)));


function commandFleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(cars[i]);
    console.log("Car " + (i+1) + ": " + action);
  }
  return "------";
}

console.log(commandFleet(cars));


function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    newCar = getNewCar('Toronto', 2);
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

console.log(addOneCarPerDay(cars, 10));

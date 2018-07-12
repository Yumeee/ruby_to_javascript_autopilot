function getNewCar(city, passengers) {
  var newCar={
    'city': city,
    'passengers': passengers,
    'gas': 100,
  }
  return newCar
}

console.log(getNewCar('Toronto', 0))

var car = [];
function addCar(newCar) {
  car.push(newCar);
  return "Adding new car to fleet. Fleet size is now " + car.length+ ".";
}

// console.log(addCar(getNewCar('Toronto, 0')));

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

console.log(fillUpGas(getNewCar('Toronto', 10)));

function getGasDisplay(gas_amount) {
  return gas_amount + "%";
}

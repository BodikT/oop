import Vehicle from '../simpleJSApp/Vehicle.js';
import Car from '../simpleJSApp/Car.js';
import Truck from '../simpleJSApp/Truck.js';
import SportCar from '../simpleJSApp/SportCar.js';
import PickupTruck from '../simpleJSApp/PickupTruck.js';

let fiat = new Vehicle("doblo", 2016, 180);
fiat.displayInfo();

let opel = new Car("astra", 2016, 180, 180000,"sedan");
opel.displayInfo();


let man = new Truck("man", 2009, 120, 7000);
man.displayInfo();
Truck.loading();

let maclaren = new SportCar("maclaren", 2018, 320, 700, 10000);
maclaren.displayInfo();

let ford = new PickupTruck("f150", 2014, 150);
console.log(ford.type);

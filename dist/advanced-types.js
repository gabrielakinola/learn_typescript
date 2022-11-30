"use strict";
const e1 = {
    name: "Max",
    priviledges: ["created server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ("priviledges" in emp) {
        console.log("Privileges" + emp.priviledges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Gabby", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving a truck....");
    }
    loadCargo(amount) {
        console.log("Loading cargo...." + amount);
    }
}
class Truck {
    drive() {
        console.log("Driving a truck....");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there";
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a character",
};

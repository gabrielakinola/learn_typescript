"use strict";
let user1;
user1 = {
    name: "Akinola Gabriel",
    age: 27,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    },
};
user1.greet("Hi there I am ");

"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "Gabriel" }, { age: 13 });
console.log(mergedObject);
function countAndPrint(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hi there"));

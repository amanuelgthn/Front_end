#!/usr/bin/env node

const obj1 = {first: 1, second: 2};
const obj2 = {third: 3, fourth: 4};


const newobj1 = obj1 + obj2;
const newobj2 = Object.assign(obj1, obj2);
const newobj3 = Object.assign({}, obj1, obj2);
// const newobj4 = Object.create(obj1, obj2);
// const newobj5 = Object.merge(obj1, obj2)


console.log(newobj1, typeof newobj1);
console.log(newobj2, typeof newobj2);
console.log(newobj3, typeof newobj3);
console.log(newobj2 === obj1);
console.log(newobj3 === obj1);
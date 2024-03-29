//Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

var obj1 = {
  name: 'John',
  age: 26
};

// Objects
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Antonijo',
  city: 'Dublin'
};

function change(a, b) {
  a = 36;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

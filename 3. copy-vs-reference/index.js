// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x; // 10
var b = y; // "abc"

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x; // 10
var b = y; // "abc"
a = 5; // 5
b = "def"; // "def"

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr; // [1] from arr
arr.push(2); // [1, 2]

// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" }; // overwritten object value

// What's the output.
var arr = ["Hi"];
var arr2 = arr; // reference of arr copied to arr2
console.log(arr === arr2); // true

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2); // false
console.log(arr == arr2); // false

//What's the output
console.log([10] === [10]); // false

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // personObj1 name: "Alex", age: 30
console.log(personObj2); // personObj2 name: "John", age: 50

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray; // Assign an new newArray key with oldArray. An empty array
oldArray.push(10); // Push 10 to empty oldArray
console.log(object.newArray === oldArray); // true

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a); // 10
console.log(b); // 5

// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a); // Object a with a: 1 key and value
console.log(b); // Object b with a: 1 key and value

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); // true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = Object.assign({}, person);

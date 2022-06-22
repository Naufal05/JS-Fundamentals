// JavaScript object

const student = {
  firstName: "ram",
  class: 10,
};
// console.log(student);

// Accessing Object Properties
//  1. Dot notation
// console.log(student.firstName);

//  2. Bracket Notation

// console.log(student["class"]);

// Javascript Nested Object

const student2 = {
  name: "Ajay",
  age: 17,
  branch: "12",
  marks: {
    science: 70,
    maths: 85,
    English: 85,
  },
};

// console.log(student2.marks);
// console.log(student2.marks.maths);

// Function in Objects

const person = {
  // properties
  name: "Rahul",
  age: 30,
  // using function as a value
  greet: function () {
    console.log("hello");
  },
};

// console.log(person.greet());

// Javascript this. keyword

/*To access a property of an object from within a method
 of the same object, you need to use the this keyword */

const student3 = {
  name: "Ram",
  age: 17,
  branch: "12",
  marks: {
    science: 50,
    maths: 50,
    English: 60,
  },
  greet: function () {
    console.log("the name is" + " " + this.name);
  },
};

// console.log(student3.greet());

// Adding a property to the object

student3.Grade = "A"; //dot notation
console.log(student3);

student3["rank"] = 10; //bracket notation
console.log(student3);

// Javascript Set
/* Unique values only
    no duplicate values.
*/

const letter = new Set(["a", "b", "c"]);
const d = "d";
letter.add(d);
console.log(letter);

// JS Maps
/*A Map holds key-value pairs where the keys can be any datatype.
, as for objects only strings.
- Map remembers the original insertion order of the keys.
whereas in object the order is not remembered.
- */
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits); // output is a obj

console.log(fruits.get("apples"));

// to find the keys

console.log(Object.key(student3));

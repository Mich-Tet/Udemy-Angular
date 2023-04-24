// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

//let age: number;
//let userName: string;
//let isInstructor: boolean;
/**
age = 22;
userName = 'Michał';
isInstructor = false;

//More complex

let hobbies: string[];
let person: {
  name: string;
  age: number;
};

let people: {
  name: string;
  age: number;
}[];

hobbies = ['Sport', 'something', 'xd'];
console.log(hobbies);
person = {
  name: "Michał",
  age: 22
};
console.log(person);
people = [{
  name: "Michał",
  age: 23
}];
console.log(people);
///////////////////////////////////////////////////////////////////
// Type inferance
// typescript assigns type itself
// cant change type like that ->

// let course = "My course";
// course = 12;
////////////////////////////////////////////////////////////////////
// Union Types
// multiple types in one variable

let union: string | number | boolean = "My course";

union = 123;

console.log(union);

////////////////////////////////////////////////////////////////////
// Type Aliases
type MyWord = {
  name: string;
  age: number;
};
let person2: MyWord;
let people2: MyWord[];
////////////////////////////////////////////////////////////////////

// Function and types

function addition(a: number,b: number): number {
  return a + b;
}

function print_o(value: any){ 
  console.log(value);
}
////////////////////////////////////////////////////////////////////
// Generics

function insertAtBegin<T>(array: T[], value: T){
  const newArray = [value,...array];
  return newArray;
}

const demoArray = [1,2,3];


const updatedArray = insertAtBegin(demoArray, -1);

// we cant put a string into array of numbers when we have <T> type becasue it specifies that item inserted has to be the same type as
// items that are already in the array [number,number,number] + (array, :number)
// const updatedArray2 = insertAtBegin(demoArray, "xd");

const stringArray = ["a","b","c"];

const updatedStringArray = insertAtBegin(stringArray, "z");
console.log(demoArray);
console.log(updatedArray);

console.log(stringArray);
console.log(updatedStringArray);
 
////////////////////////////////////////////////////////////////////

// Classes

class Student {
  
    // firstName: string;
    // lastName: string;
    // age: number;
    // courses: String[];
  
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}
  enrol(courseName: string) {
    this.courses.push(courseName);
  }
  listCourses() {
    return this.courses.slice();
  }
}

const student1 = new Student("Michal", "Tetych", 22, ["Angular"]);
student1.enrol("Java");
console.log(student1.listCourses());
console.log(student1);
 */
// Interfaces

// or alias "type Human = {}"
interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let michal: Human;

michal = {
  firstName: "Michał",
  age: 22,
  greet() {
    console.log("Hi");
  },
}

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("Hi");
  }
}
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
 */
// Classes
var Student = /** @class */ (function () {
    function Student(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student1 = new Student("Michal", "Tetych", 22, ['Angular']);
student1.enrol('Java');
console.log(student1.listCourses());
console.log(student1);

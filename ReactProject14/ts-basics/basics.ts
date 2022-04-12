// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters 

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types 

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';
// pipe symbol, the symbol btwn string and number, allows you to specify a union type

course = 12341;

// Functions & types

// function add(a: number, b: number) {
//     return a + b;
// }

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    // angle brackets are a feature of TypeScript
    // it allows us to define a Generic type
    // T stands for type
    // so instead of writing array: any[], which means the array will accept any type, we write
    // array: T[] which offers flexibility and type safety 
    // once a certain type is used for that function execution, that type is locked in and known
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1. 1. 2. 3]
insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');


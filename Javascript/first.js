{
    let a = 1;
    console.log(a);
}
{
    let a = 2;
    console.log(a);
}

let x = BigInt('1234');
let y = Symbol("Hello World");

// Object - bunch of data (variable) in a single variable
// key:value pair
const student = {
    fullName: "Aditya Tiwari",
    age: 18,
    isPass: true,
    cgpa: 9.2
};

// student.age = student.age +1;
student.age = student.age +1;
student.fullName = "Rahul Sharma";

console.log(student.fullName);
console.log(student["age"]);

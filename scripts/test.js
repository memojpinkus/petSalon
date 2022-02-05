let names = ["Victoria", "Mark", "Mike", "Phil"];
console.log(names);

let mixed = [99, "Memo", true, null , 45, "Hello World"];
console.table(mixed);

function displayNames(){
    for(let i = 0; i<4; i++){
        console.log(names[i]);
    }
}

displayNames();

let ages = [55,45,23,34,55,78];

function displayAges(){
    for(let i = 0; i < ages.length; i++){
        console.log(ages[i]);
    }
}

displayAges();

//object literal

let = student ={
    name: "Memo",
    age: 21,
    student: true,
    grade:"A-",
    music:["my bloody valentine","American Football","Charli XCX"],
    address:{
        city:"Tijuana",
        country: "Mexico"
    }
}

console.log(student.name);
console.log(student.age);
console.log(student.address.country);
console.log(student.music[0]);
console.log(student["music"][1]);

let students = [
    {
        name:"Guillermo",
        age: 24,
        activeStudent: true
    },
    {
        name:"Arturo",
        age:23,
        activeStudent: false
    },
    {
        name:"Mark",
        age:30,
        activeStudent: false
    }
]

console.log(students);
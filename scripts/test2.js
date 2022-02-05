//object literal
let lion= {
    name: "Simba",
    kingOfJungle: true,
    food: "Carnivore"
}

let lion2 = {
    name: "Nala",
    kingOfJungle: false,
    food: "Carnivore"
}

//object constructor
function Animal(name,kingOfJungle,food){
    this.name = name;
    this.kingOfJungle = kingOfJungle;
    this.food = food;
    this.hunger = 10;
    this.feed = function(){
        console.log("Feeding...");
        this.hunger = this.hunger-2;
    }
}

//create objects
let lionC = new Animal("Simba", true, "Carnivore");
console.log(lionC.feed());

//create a constructor
function Exam(examName, studentName, score, maxScore, time){
    this.examName = examName;
    this.studentName = studentName;
    this.score = score;
    this.maxScore = maxScore;
    this.time = time;
}

let examA = new Exam("Final Exam", "Guillermo Jiménez", 9, 10, "3 minutes");
console.log(examA);

let examB = new Exam("Final Exam", "Isaac Pinkus", 7, 10, "5 minutes");
console.log(examB);
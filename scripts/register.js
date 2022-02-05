let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        zipCode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 AM",
        close:"5:00 PM"
    },
    pets:[]
}

// console.log(salon.pets);

function displayPetNames(){
    for(let i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
    }
}

// alert(`There are ${salon.pets.length} pets`);

// displayPetNames();


//create the constructor
function Pet(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//create three pets using the constructor
let pet1 = new Pet("Sukha", 3, "Male");
let pet2 = new Pet("Mona", 13, "Female");
let pet3 = new Pet("Scrappy", 7, "Male");

salon.pets.push(pet1); //push the element into the array

//getting the inputs from the html
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");

function register(){
    console.log("Register");
    //create an obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value);
    console.log(thePet);
    //push obj into the array
    salon.pets.push(thePet);
    //display array
    console.log(salon.pets);
    //alert
}

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
function Pet(name,age,gender,breed, service, owner, contact){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.owner = owner;
    this.contact = contact;
}

//getting the inputs from the html
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("selService");
let petOwner = document.getElementById("txtOwner");
let petContact = document.getElementById("txtContact");

function register(){
    console.log("Register");
    //create an obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value, petBreed.value, petService.value, petOwner.value, petContact.value);
    console.log(thePet);
    //push obj into the array
    salon.pets.push(thePet);
    //display array
    console.log(salon.pets);
    //alert
    showPetsCards();
    alert("You have registered a new pet")
}

function showPetsCards(){
    document.getElementById("btnClear").hidden = true;
    document.getElementById("headerList").innerHTML = "Pets List";
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array
    for(let i=0;i<salon.pets.length;i++){
        //generate card
        //append the tmp into the html
        document.getElementById("petList").innerHTML += createCard(salon.pets[i], i);
    }
}

function removePet(index){
    if(index < salon.pets.length)
    {
        salon.pets.splice(index,1);
    }
    showPetsCards();
}

function searchPet(){
    document.getElementById("btnClear").hidden = false;
    let name = document.getElementById("txtSearch").value;
    document.getElementById("headerList").innerHTML = "Search Result";
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array
    for(let i=0;i<salon.pets.length;i++){
        if(name.toLowerCase() == salon.pets[i].name.toLowerCase())
        {
            document.getElementById("petList").innerHTML += createCard(salon.pets[i], i);
        }
    }
}

function createCard(pet, index){
    return `
        <div class="pet-card">
            <h3>${pet.name}</h3>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Pet owner: ${pet.owner}</p>
            <p>Owner contact: ${pet.contact}</p>
            <button onclick="removePet(${index});">Remove</button>
        </div>
    `;
}

function init(){
    //create three pets using the constructor
    let pet1 = new Pet("Sukha", 3, "Male", "Pomeranian", "Grooming", "Guillermo", "6641234567");
    let pet2 = new Pet("Mona", 14, "Female", "Husky", "Grooming", "Guillermo","6647654321");
    let pet3 = new Pet("Scooby", 45, "Male", "Great Dane", "Nails cut", "Shaggy", "5555555555");
    salon.pets.push(pet1,pet2);  //push the element into the array
    showPetsCards();
}
window.onload = init;
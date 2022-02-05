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
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:40,
            gender:"Male",
            breed:"Mixed",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Sukha",
            age:3,
            gender:"Male",
            breed:"Pomeranian",
            service:"Grooming",
            owner:"Memo",
            phone:"555-123-1234"
        },
        {
            name:"Mona",
            age:20,
            gender:"Female",
            breed:"Husky",
            service:"Grooming",
            owner:"Memo",
            phone:"555-321-4321"
        }
    ]
}

console.log(salon.pets);

function displayPetNames(){
    for(let i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
    }
}

alert(`There are ${salon.pets.length} pets`);

displayPetNames();


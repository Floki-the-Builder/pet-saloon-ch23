// obh literal
let salon = {
    name: 'Pet Cuts and More',
    address:{ 
        street: '123 apple street',
        city: 'San Diego',
        state: 'California',
        zip: '98123'
    },
    phone: "123 123 1252",

    hours:{
        open: '9am',
        close: '10pm'
    },
    pets:[]

    

}

// This is Constructor like a variable but a function
function pet(name,age,gender,breed,services,owner,phome){
    this.name = name;
    this.age = age;
    this.gender= gender;
    this.breed = breed;
    this.services = services;
    this.owner = owner;
    this.phone = phome;
}

// Creating new pet with constructor
let spike = new pet("spike", 3, "male", "doverman", "groom", "Ard", "555-666-5555");
let ghost = new pet("ghost", 5, "male", "husky", "nails", "mike", '222 2222222');
let grey = new pet("german sheppard", 1, "female", "husky", "nails", "julie", '323 2222222');


function isValid(aPet){
    let valid = true;
    // if there are default inputs like services, use ||
    if(aPet.name == '' || aPet.age == '' || aPet.gender == ''){
        valid = false;
    }
    return valid;
}

function register(){
    console.log('registering');
    //get info form inputs
    let petName= document.getElementById('txtName').value;
    let petAge= document.getElementById('txtAge').value;
    let petGender= document.getElementById('selGender').value;
    let petBreed= document.getElementById('txtBreed').value;
    let petServices= document.getElementById('selServices').value;
    //Vreating obj using constructor
    let newPet = new pet(petName, petAge, petGender, petBreed, petServices)
    if(isValid(newPet) == true){
    // Push obj to array 
    salon.pets.push(newPet);
    // Dos[;au to console
   displayCards();
    
    clear();
    } else {
      alert('Add missing input')
    }
}

// make a clear pet func
function clear(){
    // let inputs = document.getElementsByTagName('input')
    //    for(let i=0; i<inputs.length; i++){
    //        inputs[i].value = '';
    //    }
    
// clear with jQuery
    $("input").val="";
}    

function init(){
    // displaySalonInfo()
    salon.pets.push(spike, ghost, grey)
    displayCards();
}

// lead html, then JS to not run faster than html
window.onload=init;



// console.log(salon.pets[0])

// function displaySalonInfo(){
//     let tmp = `<p> Welcome to ${salon.name} located in ${salon.address.street} </p>`;
//     document.getElementById('info').innerHTML = tmp;
// }

// displaySalonInfo();

// function displayNames(){
//     for( let i=0; i<salon.pets.length; i++){
//         console.log(salon.pets[i].name)
//     }
// }

// displayNames();
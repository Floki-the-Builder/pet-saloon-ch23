// display  pets
function displayCards(){
    let petDiv = $("#pets")
    petDiv.html("") // clear the canvas

    // travel the array
    let tmp='';
    for(let i = 0; i < salon.pets.length; i++){
       let pet = salon.pets[i];
       tmp = `<div> 
                <h5> Name: ${pet.name} </h5>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Services: ${pet.services}</p>
            </div>`;

            petDiv.append(tmp)

    } 
    
}


//function displayTable(){
    //  tmp='<tr><tr>
//}
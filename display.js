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
                <p>Owner: ${pet.owner}</p>
                <p>Phone: ${pet.Phone}</p>

            </div>`;

            petDiv.append(tmp)

    } 
    
}


//function displayTable(){
    //  tmp='<tr><tr>
//}

function displayTable(){
    let table = $("#petsTable");
    table.html("");
    for(let i=0; i<salon.pets.length; i++){
        let pet = salon.pets[i];
        tr = `
        <tr>
            <td> ${pet.name} </td>
            <td> ${pet.age} </td>
            <td> ${pet.gender} </td>
            <td> ${pet.breed} </td>
            <td> ${pet.services} </td>
            <td> ${pet.owner} </td>
            <td> ${pet.phone} </td>


        </tr>`;

         table.append(tr)
    }
}
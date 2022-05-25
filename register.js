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

    pets:[
        {
            name: 'spike',
            age: 2,
            gender: 'male',
            breed: 'german shepard',
            services: "groom",
            owner: 'Ard',
            phone: "555 555 5555" 
        },
        {
            name: 'blue',
            age: 4,
            gender: 'male',
            breed: 'pitbull',
            services: "groom",
            owner: 'mike',
            phone: "444 555 5555" 
        },
        {
            name: 'snow',
            age: 7,
            gender: 'female',
            breed: 'chiguagua',
            services: "nails",
            owner: 'Bree',
            phone: "222 555 5555" 
        }
    ]

}

console.log(salon.pets[0])

function displaySalonInfo(){
    let tmp = `<p> Welcome to ${salon.name} located in ${salon.address.street} </p>`;
    document.getElementById('info').innerHTML = tmp;
}

displaySalonInfo();

function displayNames(){
    for( let i=0; i<salon.pets.length; i++){
        console.log(salon.pets[i].name)
    }
}

displayNames();
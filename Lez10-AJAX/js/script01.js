let demo = document.querySelector("#demo");
let utenti = [];

//Fetch utile per chiamare delle endpoint di API dietro le quali si "nascondono" dati

//sto utilizzando il metodo fetch per fare una GET presso questo endpoint
const URL = "https://reqres.in/api/users?page=2";

fetch(URL)
.then(data => {
    // console.log(data.status);
    // if(data.status == 404){
    //     location.href = "paginaErrore.html"
    // }
    return data.json()}
    ) //.json() parserizza i dati 
    
.then(response => { //la response sono i data tradotti in obj
     
    console.log(response);
    // leggo i dati, stampo l'array degli utenti
    console.log(response.data); //.data è la prop dell'oggetto che nasconde un array di persone

    utenti = response.data;

    //voglio stampare il nome di ognuna delle 6 persone
    response.data.forEach(persona => {
        console.log(persona.first_name);
        demo.innerHTML += "<li>" + persona.first_name + " " + persona.last_name + "</li>";
    });

    console.log(utenti);
})


console.log(utenti) // ----> []


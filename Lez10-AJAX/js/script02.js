let demo = document.querySelector("#demo");

const URL = "https://dummyjson.com/users";

fetch(URL)
.then(data =>{
    return data.json();
})
.then(response =>{
    console.log(response.users);
    stampaCard(response.users);
})

/**
 * @param {Object[]} utenti 
 */
function stampaCard(utenti){

    utenti.forEach(utente =>{
        demo.innerHTML += `${utente.firstName} ${utente.lastName} <br>
                            <img src='${utente.image}' class='imgDim'> <br>
                            Indirizzo: <p> ${utente.address.address} - ${utente.address.city} - ${utente.address.state} </p>
                            <hr>`;
    });

}
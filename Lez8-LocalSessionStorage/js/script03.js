let utente = {
    username: "Pippo2000",
    mail: "pippo2000@mail.com",
    role: "Admin",
    account: "Premium",
    info: {
        nome: "Giuseppe",
        cognome: "Rossi",
        dataReg: "31/08/23",
        indirizzo: "Roma"
    }
}

//voglio salvare questo utente nella local Storage

//PER POTER SALVARE UN OGGETTO NELLO STORAGE BISOGNA TRASFORMARLO SEMPRE IN JSON

let utenteJSON = JSON.stringify(utente);

localStorage.setItem("utente", utenteJSON);


//////
let btnUser = document.querySelector("#btnUser");
let infoUtente = document.querySelector("#infoUtente");

function controllaUtenteConnesso(){
    //devo andare a leggere cosa c'è nello storage
    let user = JSON.parse(localStorage.getItem("utente"));

    console.log(user);
    console.log(user.username);

    if(user != null){
        infoUtente.innerHTML += "Username: " + user.username + "<br> Ruolo: " + user.role;

    }
}

btnUser.addEventListener("click", controllaUtenteConnesso)
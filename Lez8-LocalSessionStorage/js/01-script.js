//QUando voglio utilizzare il modernizr wrappo il codice da controllare in un if la cui condizione è specificata dalla libreria stessa
// if(Modernizr.localstorage){

    let nomeUtente = "Dario";
    localStorage.setItem("nomeUser", nomeUtente);

// }else{
//     console.log("Sul tuo browser non funziona il localStorage");
// }

//Questa funzione si occuperà di guardare in local e session storage per vedere se esiste un utente connesso
function verificaSessione(){
    
    let utenteConnesso = localStorage.getItem("nomeUser");

    if(utenteConnesso != ""){
        console.log("Benvenuto " + utenteConnesso);
    }else{
        console.log("Esegui il Login");
    }
}

document.addEventListener("DOMContentLoaded", verificaSessione);
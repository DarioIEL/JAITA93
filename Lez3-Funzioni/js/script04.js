let demo = document.getElementById("demo");

//voglio costruire una funziona che collegata al click sul pulsante saluta un utente

function salutaUtente(){
    
    let username = document.getElementById("nomeUtente").value; //il .value serve a recuperare quello che scrive un utente nei campi input
    //il metodo trim() cancella gli spazi vuoti intorno ad una stringa

    if(username.trim() == "") {
        demo.innerHTML = "Non hai inserito il nome !";
    }else{
   
        let saluto = "Ciao " + username + " benvenuto sulla pagina!";
        demo.innerHTML = saluto;
    }
    
}



//oppure

// let demo = document.getElementById("demo");
// let elUsername = document.getElementById("nomeUtente"); //input

// function salutaUtente(){
//     let username = elUsername.value; //value del campo input
//     let saluto = "Ciao " + username + " benvenuta sulla pagina";
//     demo.innerHTML = saluto;
// }
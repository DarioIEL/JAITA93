function login(event){
 
    let username = document.querySelector("#username").value;
    let ruolo = document.querySelector("#ruolo").value;
    
    if(username != "" && ruolo != -1){
        localStorage.setItem("username", username);
        localStorage.setItem("ruolo", ruolo);
    }else{
        alert("Non hai inserito nessuno Username o il ruolo non è selezionato");
        event.preventDefault();
    }
}

function logout(){

    //il metodo clear() cancella tutta la localStorage in un colpo solo
    localStorage.clear();

    //il metodo removeItem() cancella solo i valori assegnati ad una particolare chiave
    // localStorage.removeItem("username");
    // localStorage.removeItem("ruolo");

    //location.reload() permette di ricaricare la pagina
    location.reload()
}

console.log(location);

let btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", login);

let btnLogout = document.querySelector("#btnLogout");
btnLogout.addEventListener("click", logout);



let sessioneUser = document.querySelector("#sessioneUser");

//questa funzione verifica se esiste qualcosa in local o session storage
function salutaUser(){

    let username = localStorage.getItem("username");
    let ruolo = localStorage.getItem("ruolo");

    if(username != null && ruolo != null){
        sessioneUser.innerHTML = `<h2> Benvenuto ${username} !!! </h2> <p> Hai selezionato il ruolo di ${ruolo} </p>`; 
    }else{
        sessioneUser.innerHTML = "<h3> Non c'è nessun utente connesso, effettua il login per partecipare ! </h3>";
    }

}

document.addEventListener("DOMContentLoaded", salutaUser);

let btnVerifica = document.querySelector("#btnVerifica");

function verificaStorage(){
    // console.log(localStorage.key(1));

    //posso leggere le chiavi presenti nella localStorage
    // for(let i = 0; i < localStorage.length; i++ ){
    //     console.log(localStorage.key(i));
    // }

    //leggo contemporaneamente chiavi e valori associati
    for(let i = 0; i < localStorage.length; i++ ){
        console.log(localStorage.key(i) + " = " + localStorage.getItem(localStorage.key(i)));
    }


}

btnVerifica.addEventListener("click", verificaStorage);

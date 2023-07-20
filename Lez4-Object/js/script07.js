//creo la funzione costruttore dell'utente
function User(nome, cognome, alias, eta, email, data){
    this.nome = nome;
    this.cognome = cognome;
    this.alias = alias;
    this.eta = eta;
    this.email = email;
    this.data = data;

    this.toString = function(){
        let presentazione = `Utente: ${this.nome} ${this.cognome}  - Alias: ${this.alias} - Età: ${this.eta} - Email: ${this.email} - DataRec: ${this.data}`;
        
        return presentazione;
    }
}


let elencoUsers = document.getElementById("elencoUsers");
let btnRec = document.getElementById("btnRec");

/**
 * Questa funzione si occuperà di recuperare tutti i campi del form e creare l'oggetto User
 */
function recuperaInfo(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let alias = document.getElementById("alias").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let eta = document.getElementById("eta").value;

    //controllo semplice da trasformare in un controllo approfondito
    if(nome == "" || cognome == "" || alias == "" || email == "" || data == "" || eta == ""){
        alert("Il tuo form non è ben compilato");
    }else{
        let mioUser = new User(nome, cognome, alias, eta, email, data);

        elencoUsers.innerHTML += "<li>" + mioUser.toString() + "</li>"
    }
}


btnRec.addEventListener("click", recuperaInfo);



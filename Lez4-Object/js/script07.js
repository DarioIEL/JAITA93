//creo la funzione costruttore dell'utente
function User(nome, cognome, alias, eta, email, data) {
    this.nome = nome;
    this.cognome = cognome;
    this.alias = alias;
    this.eta = eta;
    this.email = email;
    this.data = data;

    this.toString = function () {
        let presentazione = `Utente: ${this.nome} ${this.cognome}  - Alias: ${this.alias} - Età: ${this.eta} - Email: ${this.email} - DataRec: ${this.data}`;

        return presentazione;
    }
}


let elencoUsers = document.getElementById("elencoUsers");
let btnRec = document.getElementById("btnRec");

/**
 * Questa funzione si occuperà di recuperare tutti i campi del form e creare l'oggetto User
 */
let nome = document.getElementById("nome");

function recuperaInfo() {

    let cognome = document.getElementById("cognome").value;
    let alias = document.getElementById("alias").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let eta = document.getElementById("eta").value;

    //controllo semplice da trasformare in un controllo approfondito
    if (controllaCampi(nome.value, cognome, alias, email, data, eta)) {

        let mioUser = new User(nome.value, cognome, alias, eta, email, data);
        elencoUsers.innerHTML += "<li>" + mioUser.toString() + "</li>";
        pulisciCampi();
    }
}


function pulisciCampi() {
    nome.value = "";
    // document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("alias").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data").value = "";
    document.getElementById("eta").value = "";
}

let feed = document.getElementById("feed");

function controllaCampi(nome, cognome, alias, email, data, eta) {
    feed.innerHTML = "";

    if (nome.length > 1 && cognome.length >= 1 && alias.length >= 8 && email != "" && data != "" && Number(eta) > 18) {

        feed.innerHTML = "Dati inviati";
        return true;
    } else {

        if (nome == "") {
            feed.innerHTML += "Il nome non è ben compilato <br>";
        }

        if (cognome == "") {
            feed.innerHTML += "Il cognome non è ben compilato <br>";
        }

        if (alias == "" || alias.length <= 8) {
            feed.innerHTML += "L'alias non è ben compilato <br>";
        }

        if (email == "") {
            feed.innerHTML += "Email vuota <br>";
        }

        if (data == "") {
            feed.innerHTML += "Hai dimenticato la data<br>";
        }

        if (eta == "" || Number(eta) < 18) {
            feed.innerHTML += "Età non compatibile <br>";
        }
        return false;
    }
}


btnRec.addEventListener("click", recuperaInfo);
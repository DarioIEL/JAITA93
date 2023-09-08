

let btnInserisci = document.querySelector("#btnInserisci");

function Studente(nome, cognome){
    this.nome = nome;
    this.cognome = cognome;
}

function aggiungiStudente(){

    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;

    if(nome != "" && cognome != ""){
        let nuovoStud = new Studente(nome, cognome);
        
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuovoStud)
        })
        .then(data => {return data.json()})
    }
        
}

btnInserisci.addEventListener("click", aggiungiStudente);
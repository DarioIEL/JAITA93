let studente = {
    nome: "Anna",
    cognome: "Verdi",
    matricola: "A034",

    corsi:[
        "Java",
        "Html",
        "Angular"
    ],

    aggiungiCorso(corso){
        this.corsi.push(corso);
    },

    presentaStudente(){
        return "Nome: " + this.nome + " " + this.cognome + " Matr: " + this.matricola;
    }
}

let cardStudente = document.getElementById("cardStudente");

function stampaInfo(){

    cardStudente.innerHTML = "<h4>" + studente.presentaStudente() + "</h4>";
    
    cardStudente.innerHTML += "<p>Corsi a cui lo studente è iscritto</p>";

    studente.corsi.forEach(corso =>{
        cardStudente.innerHTML += "<li>" + corso + "</li>"
    });
}

stampaInfo();

let btnCorso =document.getElementById("btnCorso");

function aggiungiCorso(){
    let nuovoCorso = document.getElementById("nuovoCorso").value;

    if(nuovoCorso != ""){
        studente.aggiungiCorso(nuovoCorso);
        stampaInfo();
        document.getElementById("nuovoCorso").value = "";
    }

}

btnCorso.addEventListener("click", aggiungiCorso);
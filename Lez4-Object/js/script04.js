function Docente(nome, cognome, corsoAssegnato, materia){
    this.nome = nome;
    this.cognome = cognome;
    this.corsoAssegnato = corsoAssegnato;
    this.materia = materia;

    this.insegnaMateria = function(){
        return "Sto insegnando " + this.materia;
    }
    
    this.info = function(){
        // let presentazione = "Docente: " + this.nome + " " + this.cognome + ". Corso: " + this.corsoAssegnato + " " + this.insegnaMateria();

        let presentazione = `Docente: ${this.nome} ${this.cognome}. Corso: ${this.corsoAssegnato}. ${this.insegnaMateria()} `

        return presentazione;
    }

    this.rimuoviCorso = function(){
        this.corsoAssegnato = "";
        console.log("corso rimosso");
    }
}

let docentiCorso = [
    new Docente("Dario", "Mennillo", "JAITA93", "Javascript"),
    new Docente("Mauro", "Bogliaccino", "JAITA93", "JAVA"),
    new Docente("Davide", "Ghione", "JAITA93", "HTML"),
    new Docente("Oscar", "Vecchione", "JAITA93", "Database")
];


let elencoDoc = document.getElementById("elencoDoc");

function stampaCardDocenti() {
    
    docentiCorso.forEach(docente => {
        // `` -> backtick
        elencoDoc.innerHTML += `<div class="dimDiv">
        <p> Nome Docente: ${docente.nome} ${docente.cognome} </p>
        <p> Materia: ${docente.materia} </p>
        <p> Corso: ${docente.corsoAssegnato}</p>
        </div> `;

    });
    
}

function recuperaCard(){
    let cards = document.querySelectorAll(".dimDiv");

    [...cards].forEach(card => {
        card.addEventListener("click", function(){
            this.classList.add("bgRed");
        })
    })
}

stampaCardDocenti();
recuperaCard();
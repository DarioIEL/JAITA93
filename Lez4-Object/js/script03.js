//Notazione con funzione Costruttore
function Studente(nome, cognome, matricola, voto, alias){
    this.nome = nome; 
    this.cognome = cognome;
    this.matricola = matricola;
    this.voto = voto;
    this.alias = alias;
    
    this.mostraInfo = function(){
        let info = "Nome: " + this.nome + " " + this.cognome + " Matr: " + this.matricola;

        if(this.alias != undefined){
            info += " Alias: " + this.alias;
        }

        return info; 
    }
}

//Esempio di classe (Da non guardare)
// class Persona{
//     nome;
//     cognome;

//     Persona(nome, cognome){
//         this.nome = nome;
//         this.cognome = cognome;
//     }
// }

//creo le istanze dello Studente
// let studente1 = new Studente("Zaccaria", "Palmiero", "A345", 30);
// let studente2 = new Studente("Anna", "Mazzone", "A567", 30);

let aula = [

    //ATT: posso anche NON passare un parametro al costruttore
    new Studente("Zaccaria", "Palmiero", "A345", 30, "Zac"),
    new Studente("Anna", "Mazzone", "A567", 30),
    new Studente("Laura", "Comparelli", "A678", 30, "LCO"),
    new Studente("Mauro", "De Costanzo", "A987", 30)
];

let elencoStudenti = document.getElementById("elencoStudenti");

aula.forEach(studente => {
    elencoStudenti.innerHTML += "<li>" + studente.mostraInfo() +"</li>";


   })
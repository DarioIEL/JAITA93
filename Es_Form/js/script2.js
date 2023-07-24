// Recupero i campi input

function Utente2(nome, codFisc, eta){
    this. nome = nome;
    this.codFisc = codFisc;
    this.eta = eta;

    this.toString = function(){
        return `${this.nome} - cod Fiscale: ${this.codFisc} - Età: ${this.eta}`;
    }
}

let btn2 = document.getElementById("btn2");
let feed2 = document.getElementById("feed2");
let demo2 = document.getElementById("demo2");

function registraUtenza2(){
//prendo i value dei campi input
let nome2 = document.getElementById("nome2").value;
let codFisc2 = document.getElementById("codFisc2").value;
let eta2 = document.getElementById("eta2").value;


let mioUtente2 = new Utente2(nome2, codFisc2, eta2);

if(controlla2(nome2, codFisc2, eta2)){
    demo2.innerHTML = mioUtente2.toString();
}

}

/**
 * @param {String} nome
 * @param {String} codFisc 
 * @param {Number} eta 
 */
function controlla2(nome, codFisc, eta){
    if(nome.trim().includes(" ") && codFisc != "" && eta >= 18){
        feed1.innerHTML = "";
        return true;
    }else{
        feed1.innerHTML = "C'è qualcosa che non va nel form";
        return false;
    }
}


btn2.addEventListener("click", registraUtenza2);
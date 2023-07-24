// Recupero i campi input
let nome = document.getElementById("nome");
let codFisc = document.getElementById("codFisc");
let eta = document.getElementById("eta");
let btn1 = document.getElementById("btn1");
let feed1 = document.getElementById("feed1");
let demo1 = document.getElementById("demo1");

function Utente(nome, codFisc, eta){
    this. nome = nome;
    this.codFisc = codFisc;
    this.eta = eta;

    this.toString = function(){
        return `${this.nome} - cod Fiscale: ${this.codFisc} - Età: ${this.eta}`;
    }
}


function registraUtenza(){
//prendo i value dei campi input

let mioUtente = new Utente(nome.value, codFisc.value, eta.value);

if(controlla(nome.value,codFisc.value, eta.value)){
    demo1.innerHTML = mioUtente.toString();
}

}

/**
 * @param {String} nome
 * @param {String} codFisc 
 * @param {Number} eta 
 */
function controlla(nome, codFisc, eta){
    if(nome.trim().includes(" ") && codFisc != "" && eta >= 18){
        feed1.innerHTML = "";
        return true;
    }else{
        feed1.innerHTML = "C'è qualcosa che non va nel form";
        return false;
    }
}


btn1.addEventListener("click", registraUtenza);
//Dichiaro una funzione 
function salutaUtente(){
    console.log("Ciao, Dario");
}

//Richiamo la funzione per poterla eseguire 
salutaUtente();

/////////////////////////////////////////
//demo è una variabile globale, visibile ovunque
let demo = document.getElementById("demo");

function benvenuto(){
    //messaggio è una var locale, al di fuori della funzione non è visibile per niente
    let messaggio = "Ciao, Dario benvenuto sulla pagina!";
    demo.innerHTML = messaggio;
    console.log(messaggio);
}

benvenuto();

// console.log(messaggio);//restituisce un errore

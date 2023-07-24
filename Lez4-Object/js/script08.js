// let regexCodFisc = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;

// let mioCodFisc = "MNNDRA32C23P987M";

// function controllaCodice(){

//     if(mioCodFisc.match(regexCodFisc)){
//         console.log("Il tuo cod Fisc è corretto");
//     }else{
//         console.log("Il tuo codice fiscale è sbagliato");
//     };
// }

// controllaCodice();


let codFisc = document.getElementById("codFisc");
let password = document.getElementById("password");
let cap = document.getElementById("cap");

let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

let regexCodFisc = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
let regexPassw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
let regexCap = /^[0-9]{5}$/;


//la funz controlla le regex
function controlla(){
    demo.innerHTML = "";

    if(codFisc.value.match(regexCodFisc)){
        demo.innerHTML += "Codice Fiscale OK <br>";
    }else{
        demo.innerHTML += "Codice Fiscale Errato <br>";
    }

    if(password.value.match(regexPassw)){
        demo.innerHTML += "Password OK <br>";
    }else{
        demo.innerHTML += "Password errata <br>";
    }

    if(cap.value.match(regexCap)){
        demo.innerHTML += "CAP OK";
        controllaSeEsisteInItalia()
    }else{
        demo.innerHTML += "CAP errato";
    }
}

btn.addEventListener("click", controlla);
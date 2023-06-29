let listaColleghiNome = document.getElementById("listaColleghiNome");
let listaColleghiCognome = document.getElementById("listaColleghiCognome");

let colleghiNome = ["Luca", "Erica", "Anna", "Gianmarco"];
let colleghiCognome = ["Riccardi", "Landolfo", "Mazzone", "Marrandino"];

for(let i = 0; i < colleghiNome.length; i++){

    let elemento = colleghiNome[i];
    let inizialeMaius = elemento[i].charAt(0).toUpperCase();
    let finaleMaius = elemento.charAt(elemento.length - 1).toUpperCase();

    listaColleghiNome.innerHTML += "<li> nome: " + inizialeMaius + elemento.slice(1,-1) + finaleMaius + "</li>";   
}


//Il primo for cicla i cognomi
for(let i = 0; i < colleghiCognome.length; i++){

    let cognome = colleghiCognome[i];
    let cognomeModificato = "";
    
    //il secondo for cicla le singole lettere
    for(j = 0; j < cognome.length; j++){
        let lett = cognome[j];

        if(j % 2 === 0){
            cognomeModificato += lett.toUpperCase();
        }else{
             cognomeModificato += lett.toLowerCase();
        }
    }

    listaColleghiCognome.innerHTML +="<li> Cognome: " + cognomeModificato + " </li>";
}


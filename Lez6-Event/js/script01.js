let demo = document.querySelector("#demo");

let btn = document.querySelector("#btn");

function salutaQualcuno(){
    demo.innerHTML += "Ciao, Mario";
}

//Sintassi:
//HTMLElement.addEventListener("event", function);
//perché non si usano le () quando richiamo la funz. Se utilizzo le () la funzione viene eseguita alla lettura dello script e non allo scatenarsi dell'evento

btn.addEventListener("click", salutaQualcuno);

/////////////////////////////
let btn2 = document.querySelector("#btn2");

//non creo una funzione ma utilizzo una funzione anonima

btn2.addEventListener("click", function(){
    //qui sviluppo il corpo della funzione
    demo.innerHTML += "Ciao dalla funzione anonima";

    //Nelle funzioni anonime posso anche richiamare altre funzioni
    salutaQualcuno();
})


//altro utilizzo della funzione anonima quando sono in presenza di parametri
let risultato = document.querySelector("#risultato");
let btnCalc = document.querySelector("#btnCalc");



function moltiplica(num1, num2){
    let prodotto = num1 * num2;
    return prodotto;
}


btnCalc.addEventListener("click", function(){
    
    let num1 = Number(document.querySelector("#num1").value)
    let num2 = Number(document.querySelector("#num2").value)

    let mioRisultato = moltiplica(num1,num2);
    // let mioRisultato = num1 * num2;

    risultato.innerHTML = "IL risultato del prodotto è : " + mioRisultato;
});



// //esiste una versione intermedia

// btn.onclick = function(){
//     console.log("Ciao dal passato");
// }


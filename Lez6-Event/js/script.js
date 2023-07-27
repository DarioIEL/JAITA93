let strobo = document.querySelector("#strobo");

// /**
//  * @param {HTMLElement} strobo
//  */
// strobo.addEventListener("mouseover", function(){
//     //il this fa riferimento allo strobo, poiché l'oggetto strobo è quello sul quale applichiamo l'event listener
//     this.classList.add("sfondo");
// });

// strobo.addEventListener("mouseout", function(){
//     this.classList.remove("sfondo");
// });

//fACCio la stessa cosa con delle funzioni denominate

// function mettiSfondo(){
//     strobo.classList.add("sfondo");
// }

// function togliSfondo(){
//     strobo.classList.remove("sfondo");
// }


// strobo.addEventListener("mouseover", mettiSfondo);
// strobo.addEventListener("mouseout", togliSfondo);

//Faccio la stessa cosa con funzioni generiche
/**
 * 
 * @param {HTMLElement} elementoDellaPagina 
 */
function mettiSfondo(elementoDellaPagina){
    elementoDellaPagina.classList.add("sfondo");
}

function togliLoSfondo(elementoDellaPagina){
    elementoDellaPagina.classList.remove("sfondo");
}

strobo.addEventListener("mouseover", function(){
    mettiSfondo(this);
});


strobo.addEventListener("mouseout", function(){
    togliLoSfondo(this);

})
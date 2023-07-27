let strobo = document.querySelector("#strobo");
let demo = document.querySelector("#demo");

/**
 * 
 * @param {HTMLElement} elemento 
 */
function cambiaSfondo(elemento){
    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);
    elemento.setAttribute("style", `background-color: rgb(${red}, ${green}, ${blue})`);
}

function rimuoviSfondo(elemento){
    elemento.removeAttribute("style");
}

strobo.addEventListener("mousemove", function(){
    cambiaSfondo(this);
    let colore = this.getAttribute("style");
    this.innerHTML = "<p>" + colore + "</p>"; 
});
strobo.addEventListener("mouseout", function(){
    rimuoviSfondo(this);
    this.innerHTML = "";
});


/////////////////STROBO 2///////////////

let strobo2 = document.querySelector("#strobo2");

let coloriDisponibili = ["hotpink", "lime", "deepskyblue", "moccasin", "purple", "red", "green", "yellow", "grey"];

/**
 * 
 * @param {HTMLElement} elemento 
 */
let indiceProgressivo = 0;
function cambiaColore(elemento){
    // let indiceCasuale = Math.floor(Math.random() * coloriDisponibili.length);
    // elemento.setAttribute("style", `background-color: ${coloriDisponibili[indiceCasuale]}`);
    
    elemento.setAttribute("style", `background-color: ${coloriDisponibili[indiceProgressivo]}`);
    if(indiceProgressivo >= coloriDisponibili.length - 1){
        indiceProgressivo = 0;
    }else{
        indiceProgressivo++;
    }

}

strobo2.addEventListener("mouseover", function(){
    cambiaColore(this);
})

demo.addEventListener("click", function(){
    cambiaColore(this);
})
// let demo = document.getElementById("demo");

//querySelector("CssSintax")
//# -> id
//. -> class
//p -> elemento HTML

//querySelector restituisce un unico elemento ALLA PRIMA OCCORRENZA, qualsiasi sia la sintassi. Ovviamente usato con gli id è comodo

let demo = document.querySelector("#demo");
// let demo = document.querySelector("div");

demo.innerHTML = "Questo è il contenuto nuovo del demo";


/////prova del query Selector sugli li
// let li = document.querySelector("li");

// let li3 = document.getElementById("tre");
let li3 = document.querySelector("#tre");
li3.innerHTML = "Biscotti";

let li2 = document.querySelector("#listaSpesa li#due");

li2.innerHTML = "Birra";

//querySelector recupera sempre la prima occorrenza
let li1 = document.querySelector(".txtBlue");

li1.innerHTML = "Gnocchi";


//voglio conoscere cosa c'è scritto nel secondo li 
let secondoLi = document.querySelector("li#due");
console.log(secondoLi.innerHTML);
let nomeUser = "Pippo";
let mailUser = "pippo@mail.it";
let idUser = 3;
let connessioneAttiva = true;

console.log("Username: " + nomeUser + " Email: " + mailUser + " - Id: " + idUser + " - Conn: " + connessioneAttiva);

//// somma tra 2 due numeri 

let primoNum = 44532;
let secondoNum = 9.876;

let somma = primoNum + secondoNum;
let prodotto = primoNum * secondoNum;
let differenza = primoNum - secondoNum;
let quoziente = primoNum / secondoNum;


console.log("La somma vale: " + somma);
console.log("Il prodotto vale: " + prodotto);
//toPrecision(3) imposta il numero di cifre significative dopo la virgola
console.log("Il quoziente vale: " + quoziente.toPrecision(3));
console.log("La differenza vale: " + differenza);

//Recupero gli elementi dallo HTML. Il parametro del metodo getElementById("") è una stringa corrispondente all'id dichiaro nella pagina html
//ogni elemento html è un oggetto
let numeri = document.getElementById("numeri"); //<p id="numeri"></p>

//Modifico quello che è scritto nel mio elemento html
numeri.innerHTML = "I numeri sono: " + primoNum + " e " + secondoNum;

let elSomma = document.getElementById("elSomma");
let elProdotto = document.getElementById("elProdotto");
let elDifferenza = document.getElementById("elDifferenza");
let elQuoziente = document.getElementById("elQuoziente");

elSomma.innerHTML = "La somma vale: " + somma;
elProdotto.innerHTML = "Il prodotto vale: " + prodotto;
elDifferenza.innerHTML = "La differenza vale: " + differenza;
elQuoziente.innerHTML = "Il quoziente vale: " + quoziente;

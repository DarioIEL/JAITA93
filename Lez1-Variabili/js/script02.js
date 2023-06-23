//array = contenitore di elementi simili tra loro
//l'array in JS è definito attraverso le parentesi quadre e non bisogna specificare né il tipo né il numero di elementi che conterrà
//ATT: in JS posso fare degli Array misti ma la logica me lo impedisce
// let mioArray = ["Dario", "MEnnillo", 34, true, "ok"];

let colori = ["verde", "blu", "giallo", "rosso"];

//Gli Array sono 0-based
//per richiare i singoli elementi nell'array nomeArray[indice]
let primoColore = colori[0];
console.log("Il primo colore è: " + primoColore);

let secondoColore = colori[1];
console.log("Il secondo colore è: " + secondoColore);

let ultimoColore = colori[colori.length - 1];
console.log("L'ultimo colore è: " + ultimoColore);

//stampo la lunghezza dell'array attraverso la propr .length
let numColori = colori.length;
console.log("L'array contiene " + numColori + " elementi");

//stampo tutto l'array
console.log(colori);

//stampo i singoli elementi
//for(inizializzazione; condizione; aggiornamento)

for(let i = 0; i < colori.length; i++){
    //1°giro i = 0; 0<4 True; i=1
    //2°giro i = 1; 1<4 True; i=2
    //3°giro i = 2; 2<4 True; i=3
    //4°giro i = 3; 3<4 True; i=4
    //5°giro i = 4; 4<4 False; X
    console.log(colori[i]);
}


//metodi solitamente sono dei verbi
//prop sono sostantivi
//metodi per array

//aggiungo un elemento all'array di colori
colori.push("viola");
console.log(colori);

//ordino l'array alfabeticamente
colori.sort();
console.log(colori);

//inverto l'ordine dell'array
colori.reverse();
console.log(colori);

//elimino l'ultimo elemento dell'array
colori.pop();
console.log(colori);


//ricerca di un elemento
console.log( colori.indexOf("rosso") ); //restituisce l'indice nel quale si trova il colore rosso
console.log( colori.indexOf("arancione") ); // -1

console.log(colori.includes("giallo")); //true

console.log(colori.includes("magenta")); //false




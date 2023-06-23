let listaCarrello = document.getElementById("listaCarrello"); //ul
let totale = document.getElementById("totale");

let prodotti = [
    "mouse",
    "tastiera",
    "pad",
    "lampada da scrivania"
];

let prezzi = [
    32,
    65,
    20,
    89.90
];

let totaleCarrello = 0;

// += operatore di auto incremento

// listaCarrello.innerHTML = "<li>" + prodotti[0] + "</li>";
// listaCarrello.innerHTML += "<li>" + prodotti[1] + "</li>";
// listaCarrello.innerHTML += "<li>" + prodotti[2] + "</li>";
// listaCarrello.innerHTML += "<li>" + prodotti[3] + "</li>";

//questo for stampa i prodotti
for(let i = 0; i < prodotti.length; i++){
    listaCarrello.innerHTML += "<li>" + prodotti[i] + " - prezzo: " + prezzi[i] + " € </li>";
}



//questo for mi calcola il totale
for(let i = 0; i < prezzi.length; i++){
    
    totaleCarrello += prezzi[i];

    //0+32 = 32
    //32 + 65 = 97
    //97 + 20 = 117
    //117 + 89.9 = 206.9
}

//stampo il totale
totale.innerHTML = "Totale: €" + totaleCarrello;


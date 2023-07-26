// Soluzione di ANNA MAZZONE
// let listaFilm = document.querySelectorAll("#listaFilm li");

// let foto = [];
// let wiki = [];
// let titoli = [];

// for(let i = 0; i < listaFilm.length; i++){
//     foto[i] = document.createElement("img");
//     wiki[i] = document.createElement("a");
//     titoli[i] = document.createElement("h3");

//     listaFilm[i].appendChild(foto[i]);
//     titoli[i].appendChild(wiki[i]);
//     listaFilm[i].appendChild(titoli[i]);
// }

//     foto[0].setAttribute("src", "./img/dune.jpg");
//     wiki[0].setAttribute("href", "https://it.wikipedia.org/wiki/Dune_(film_2021)");
//     wiki[0].textContent = "Dune";

//Soluzione di ERICA LANDOLFO
// let listaFilm = document.querySelectorAll("#listaFilm li");

// let ul = document.querySelector("#listaFilm");

// let img = ["./img/dune.jpg", './img/barbie.jpg', "./img/bladerunner.jpg", "./img/ilsignoredeglianelli.jpg"];

// let linkFilm =  [
//     "https://it.wikipedia.org/wiki/Dune_(film_2021)",
//     "https://it.wikipedia.org/wiki/Barbie_(film)",
//     "https://it.wikipedia.org/wiki/Blade_Runner",
//     "https://it.wikipedia.org/wiki/Il_Signore_degli_Anelli_(serie_di_film)"
// ];

// ul.innerHTML = "";

// for(let i = 0; i < listaFilm.length; i++){
//     let a = document.createElement("a");
//     let h3 = document.createElement("h3");

//     a.setAttribute("href", linkFilm[i]);
//     a.textContent = listaFilm[i].textContent;

//     h3.appendChild(a);

//     let imgElement = document.createElement("img");
//     imgElement.setAttribute("src", img[i]);

//     let li = document.createElement("li");
//     li.appendChild(h3);

//     li.appendChild(imgElement);
//     //genitore.appendChild(figlio)
//     ul.appendChild(li);
// }


//Soluzione di Emanuele
// let filmDati = [
//     {
//         titolo: "Dune",
//         wikiLink: "https://it.wikipedia.org/wiki/Dune_(film_2021)",
//         locandina: "./img/dune.jpg"
//     },
//     {
//         titolo: "Barbie",
//         wikiLink: "https://it.wikipedia.org/wiki/Barbie_(film)",
//         locandina: "./img/barbie.jpg"
//     },
//     {
//         titolo: "Blade Runner",
//         wikiLink: "https://it.wikipedia.org/wiki/Blade_Runner",
//         locandina: "./img/bladerunner.jpg"
//     },
//     {
//         titolo: "Il Signore degli anelli",
//         wikiLink: "https://it.wikipedia.org/wiki/Il_Signore_Degli_Anelli",
//         locandina: "./img/ilsignoredeglianelli.jpg"
//     },
// ];

// let listaFilm = document.querySelector("#listaFilm");

// for(let i = 0; i < filmDati.length; i++){
//     let film = filmDati[i];
//     let listaOggetti = listaFilm.children[i]; //recupero i singoli li della lista
    
//     let h3 = document.createElement("h3");
//     h3.textContent = film.titolo;

//     let link = document.createElement("a");
//     link.setAttribute("href", film.wikiLink);
    
//     link.appendChild(h3);

//     let locandina = document.createElement("img");
//     locandina.setAttribute("src", film.locandina);
//     locandina.setAttribute("alt", film.titolo + " locandina ");

//     listaOggetti.innerHTML = "";

//     listaOggetti.appendChild(link);
//     listaOggetti.appendChild(locandina);
// }

// let imgs = document.querySelectorAll("#listaFilm img");

// imgs.forEach(img =>{ 
//     img.setAttribute("class", "imgDim")
// });


//Soluzione Dario
let ul = document.querySelector("#listaFilm");
let listaFilm = document.querySelectorAll("#listaFilm li");

let titoli = [];

//prendo i titolo dall' HTML
for(let i = 0; i < listaFilm.length; i++){
    titoli[i] = listaFilm[i].textContent;
}

console.log(titoli);


/**
 * 
 * @param {String} titoloFilm 
 * @param {HTMLElement} li 
 */
function costruisciLi(titoloFilm, li){

    let a = document.createElement("a");
    a.setAttribute("href", "https://it.wikipedia.org/wiki/"+titoloFilm );
    a.textContent = titoloFilm;  //<a href="https://it.wikipedia.org/wiki/Dune">Dune</a>;

    li.textContent = "";
    li.appendChild(a);

    let img = document.createElement("img");
    let path = titoloFilm.toLowerCase().split(" ").join("");
    console.log(path);
    img.setAttribute("src", "./img/" + path +".jpg");

    li.appendChild(img);
}


for(let i = 0; i < listaFilm.length; i++){
    costruisciLi(titoli[i], listaFilm[i]);
}

let imgs = document.querySelectorAll("#listaFilm img");

imgs.forEach(img =>{ 
    img.setAttribute("class", "imgDim");
});

ul.setAttribute("class", "elenco");

for (let i = 0; i < listaFilm.length; i++) {
    listaFilm[i].setAttribute("class", "cardFilm");    
}

//metodo costruttore dell'oggetto Viaggio
function Viaggio(titolo, meta, prezzo, img, descrizione, disponibilita) {
    this.titolo = titolo;
    this.meta = meta;
    this.prezzo = prezzo;
    this.img = img;
    this.descrizione = descrizione;
    this.disponibilita = disponibilita;
    
    this.compra = function(){
        this.disponibilita--;
    }
}


let listaViaggi = [
    new Viaggio("Vacanza da Sogno", "Hawaii", 4499, "https://hips.hearstapps.com/hmg-prod/images/hawaii-1667909275.png?crop=1xw:1xh;center,top&resize=1200:*", "Soggiorno alle Hawaii per 2 persone, 2 settimane in un resort non di lusso.", 5),
    new Viaggio("Non è Ischia ma una piccola Ischia", "Ischitella", 1450, "https://www.lidoazzurro.it/wp-content/uploads/2015/06/Slide2-Mare-1280-x-640.png", "Divertiti alla long beach della Campania, una pizza fritta al giorno inclusa nel prezzo.", 1),
    new Viaggio("L'isola italiana più ambita", "Sardegna", 2222, "https://www.sardegna.info/wp-content/uploads/sites/5/stintino-spiaggia-la-pelosa.jpg", "Se vai a Stintino non trovi posto neppure in piedi, però è bello !!", 0),
    new Viaggio("La perla del Cilento", "Castellabate", 1980, "https://www.campania.info/wp-content/uploads/sites/111/santa-maria-castellabate-hd.jpg", "Non sarà come Ischia ma di sicuro meglio di Ischitella !", 6),
    new Viaggio("A chi piace a chi no", "Trentino Alto Adige", 1250, "https://cdn.studenti.stbm.it/images/2021/08/20/trentino-alto-adige-orig.jpeg", "Divertiti in Trentino, un secchio di mele al giorno inclusi nel prezzo", 8)
];

let grigliaViaggi = document.querySelector("#grigliaViaggi");

for (let i = 0; i < listaViaggi.length; i++) {
    //creo il div wrapper della singola card
    let col4 = document.createElement("div");

    //all'elemento col4 assegno subito la classe .col di bootstrap
    col4.setAttribute("class", "col-sm-6 col-md-4");

    let disclaimer = "";

    if (listaViaggi[i].disponibilita == 0) {
        disclaimer = "<p class='text-danger'>Mi dispiace, posti esauriti </p>";
    } else if (listaViaggi[i].disponibilita > 0 && listaViaggi[i].disponibilita <= 3) {
        disclaimer = "<p class='text-warning'>Affrettati, mancano ancora pochi posti</p>";
    } else {
        disclaimer = "";
    }


    //COMPONGO LA SINGOLA CARD CON IL SINGOLO VIAGGIO
    let card = `
    <div class="card h-100" style="border-color:black;">
        <img class="card-img-top" src="${listaViaggi[i].img}" alt="Title">
        <div id="${listaViaggi[i].meta}"  class="card-body h-100 d-flex flex-column">
            <h4 class="card-title">${listaViaggi[i].meta}</h4>
            <h6 class="card-text">${listaViaggi[i].titolo}</h6>
            <p class="card-text">${listaViaggi[i].descrizione}</p>
            <p class="card-text text-end mb-auto"> <strong> ${listaViaggi[i].prezzo} € </strong></p>

            <p class="card-text">${listaViaggi[i].disponibilita} disponibili </p>
            
            ${disclaimer}
            
            <button type="button" class="btn btn-primary" onclick='compra("${listaViaggi[i].meta}", "${listaViaggi[i].prezzo}", "${listaViaggi[i].disponibilita}")'>Compra</button>

        </div>
    </div>`;



    col4.innerHTML = card;

    //alla fine aggancio ogni card (col4) alla griglia
    grigliaViaggi.appendChild(col4);

}

let viaggiDaAcquistare = [];

function compra(meta, prezzo, disponibilita){
    
    console.log("Stai acquistando il seguente viaggio: " + meta + " al seguente prezzo: " + prezzo + " . Dispo: " + disponibilita);
    
    if(disponibilita != 0){

        let listaCarrello = document.querySelector("#listaCarrello");
        listaCarrello.innerHTML = "";
        
        let viaggio = `<li> ${meta} - ${prezzo}€ </li>`;
        viaggiDaAcquistare.push(viaggio);
        
        viaggiDaAcquistare.forEach(rigaViaggio =>{
            listaCarrello.innerHTML += rigaViaggio;
        });

    }else{
        let spazioAlert = document.querySelector("#spazioAlert");
        
        let alert = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> Mi dispiace, hai selezionato un viaggio senza disponibilità scegliene un altro !
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

        spazioAlert.innerHTML = alert;

    }

}

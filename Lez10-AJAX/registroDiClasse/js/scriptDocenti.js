let btnOn = document.querySelector("#btnOn");
let btnOff = document.querySelector("#btnOff");
let btnAll = document.querySelector("#btnAll");
let listaDocenti = document.querySelector("#listaDocenti");

function mostra() {

    listaDocenti.innerHTML = "";

    let URL = "http://localhost:3000/docenti"

    let status = this.getAttribute("data-status");

    if (status == "online") {
        URL += "?status=" + status; //"http://localhost:3000/docenti?status='online'"
    } else if (status == "offline") {
        URL += "?status=" + status;  //"http://localhost:3000/docenti?status='offline'"
    } else {
        URL = URL;   //"http://localhost:3000/docenti"
    }

    fetch(URL)
        .then(data => {
            return data.json()
        })
        .then(response => {
            console.log(response);

            response.forEach(docente => {
                creaCardDocente(docente);
            });

        })
}

function creaCardDocente(docente) {

    let classBgCard = ""

    docente.status == "online" ? classBgCard = "bg-success": classBgCard = "bg-danger";

    let card = `
    <div class="col-4 mt-5">
        <div class="card">
            <div class='card-body ${classBgCard}'>
                <h3 class="card-title">${docente.nome}</h3>
                <p class="card-text">${docente.materia}</p>
                <p class="card-text">${docente.status}</p>
            </div>
        </div>
    </div>`;

    listaDocenti.innerHTML += card;
}

btnOn.addEventListener("click", mostra);
btnOff.addEventListener("click", mostra);
btnAll.addEventListener("click", mostra);
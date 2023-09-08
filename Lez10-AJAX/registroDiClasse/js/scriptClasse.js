let listaStudenti = document.querySelector("#listaStudenti")

const URL = "http://localhost:3000/studenti";

fetch(URL)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);

        response.forEach(studente => {
            creaCard(studente);
        });
    })

function creaCard(studente) {
    let card = document.createElement("li");
    card.setAttribute("class", "list-group-item d-flex align-items-center");
    card.innerHTML = `<span>${studente.id} - ${studente.nome} - ${studente.cognome}</span>`;

    let btnElim = document.createElement("button");
    btnElim.setAttribute("class", "btn btn-default d-inline-block ms-auto");
    btnElim.innerHTML = "X"
    card.appendChild(btnElim);

    listaStudenti.appendChild(card);
}
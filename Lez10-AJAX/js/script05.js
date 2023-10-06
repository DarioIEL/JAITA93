let btn = document.querySelector("#btn");

let endpoint = "http://localhost:3000/contacts";

let contatti = [];

function scaricaContatti(){

    //CRUD = Create Read Update Delete
    //metodo GET ---> READ dei dati 
    fetch(endpoint)
    .then(data => {
        console.log(data);
        return data.json()
    })
    .then(response => {
        console.log(response);
        contatti = response;
        stampaRubrica(contatti);
    });

    // console.log(contatti);
}

btn.addEventListener("click", scaricaContatti);

/**
 * 
 * @param {Array} contatti 
 */
function stampaRubrica(contatti){
    let elencoContatti = document.querySelector("#elencoContatti");

    contatti.forEach(contatto => {
        elencoContatti.innerHTML += `<li>${contatto.nome} ${contatto.numTel} </li>`;
    })
}


let btnPost = document.querySelector("#btnPost");

function registraContatto(){

    let nuovoContatto = {
        nome: "Marco Gialli",
        numTel: "765467890",
        email: "marco.gialli@mail.com"
    }

    //CRUD --- > Create
    //metodo POST ---> Create del dato
    fetch(endpoint, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(nuovoContatto)
    })
    .then(
        data =>{ return data.json() }
    )

}

btnPost.addEventListener("click", registraContatto);


let btnPatch = document.querySelector("#btnPatch");

function modificaContatto1(){

    let propDaModificare = {
        nome: "Pippo Baudo",
        email: "pippo.baudo@mail.com"
    }

    //CRUD --> Update tramite metodo PATCH

    fetch(endpoint+"/1", {
        method: "PATCH",
        headers:  {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(propDaModificare)
    })
    .then(data => {return data.json()})

}


btnPatch.addEventListener("click", modificaContatto1);

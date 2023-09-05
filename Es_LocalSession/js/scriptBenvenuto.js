let saluta = document.querySelector("#saluta");
let imgAvatar = document.querySelector("#avatar");
let btnLogOut = document.querySelector("#btnLogOut");


function stampaInfo() {
    let utenteConnesso = JSON.parse(localStorage.getItem("user"));

    if (utenteConnesso == null) {
        location.href = "./404.html";
    } else {
        saluta.innerHTML = `Ciao ${utenteConnesso.nome} ${utenteConnesso.cognome}`;
        imgAvatar.setAttribute("src", utenteConnesso.avatar);
    }
}

document.addEventListener("DOMContentLoaded", stampaInfo);

function logout() {
    localStorage.clear();
    location.href = "./arrivederci.html";
}

btnLogOut.addEventListener("click", logout);


let btnMod = document.querySelector("#btnMod");

function modificaUser(){
    //1. Mostra il form
    let divModifica = document.querySelector("#divModifica");
    // divModifica.setAttribute("class", "col-6");
    divModifica.classList.remove("d-none");

    //2. REcupero i campi input del form
    let nome = document.querySelector("#nome");
    let cognome = document.querySelector("#cognome");
    let email = document.querySelector("#email");
    let username = document.querySelector("#username");
    let avatarForm = document.querySelector("#avatarForm");

    let utenteConnesso = JSON.parse(localStorage.getItem("user"));

    nome.value = utenteConnesso.nome;
    cognome.value = utenteConnesso.cognome;
    email.value = utenteConnesso.email;
    username.value = utenteConnesso.username;
    avatarForm.value = utenteConnesso.avatar;
}

btnMod.addEventListener("click", modificaUser);
let formReg = document.querySelector("#formReg");

function User(nome, cognome, email, username, avatar){
    this.nome = nome;
    this.cognome = cognome,
    this.email = email,
    this.username = username,
    this.avatar = avatar
}

function registrati(){
    
    let nome = document.querySelector("#nome");
    let cognome = document.querySelector("#cognome");
    let email = document.querySelector("#email");
    let username = document.querySelector("#username");
    let avatar = document.querySelector("#avatar");

    if(nome.value != "" && cognome.value != "" && email.value != "" && username.value != "" && avatar.value != ""){
        
        let user = new User(nome.value, cognome.value, email.value, username.value, avatar.value);
        let userJSON = JSON.stringify(user);
        localStorage.setItem("user", userJSON);

    }else{
        alert ("Non hai inserito i dati necessari");
        event.preventDefault();
        console.log(event);
    }
}

formReg.addEventListener("submit", function(){
    registrati();
});
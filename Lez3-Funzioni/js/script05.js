
let demo = document.getElementById("demo");

function recuperaUsername() {
    let username = document.getElementById("username").value;
    return username;
}

function controlla(){
    let username = recuperaUsername();

    if(username == ""){
        return false;
    }else{
        return true;
    }
}

function stampa(username){
    demo.innerHTML = "Benvenuto " + username + " !!";
}

function eseguiTutto(){
    let flag = controlla(); //flag: boolean

    if(flag){
        stampa(recuperaUsername());
    }else{
        demo.innerHTML = "Mi dispiace non hai fornito uno username";
    }
}
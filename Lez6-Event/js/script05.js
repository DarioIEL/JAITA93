//FOCUS & BLUR

//l'evento focus si verifica quando clicco in un campo input
//Appena metto a fuoco il campo input mi faccio suggerire qualcosa

let elUsername = document.querySelector("#username"); //<input id="nome">
let feed = document.querySelector("#feed");

elUsername.addEventListener("focus", function(){
    console.log("Ho messo a fuoco il campo username");
    feed.textContent = "Ricorda: il tuo username deve essere di almeno 5 caratteri";
});

elUsername.addEventListener("blur", function(){
    feed.innerHTML = "";
    console.log("Il campo nome è fuori fuoco");
    
    if (elUsername.value.length == 0){
        feed.textContent = "Non hai inserito nulla !!";
    }else if(elUsername.value.length < 5 ){
        feed.textContent = "Il tuo username ha una lunghezza non adeguata";
    }else{
        feed.textContent = "Bravo, il tuo username è valido";
    }
});

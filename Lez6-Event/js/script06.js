let elTipologia = document.querySelector("#tipologia"); //<select>.....</select>
let elUsername = document.querySelector("#username");


let btn = document.querySelector("#btn");
let feed = document.querySelector("#feed");
let demo = document.querySelector("#demo");


//change è tipicamente utilizzato sulle select
elTipologia.addEventListener("change", function(){
    console.log("Stai selezionando la tipologia " + this.value); //this.value è il value della option nella mia select non quello che è scritto dentro
    //Il this fa riferimento alla variabile elTipologia, oggetto contenitore del this
    feed.innerHTML = "Hai selezionato la tipologia: " + this.value;
});

function controlla(){
    if(elUsername.value == "" || elTipologia.value == -1){
        demo.innerHTML = "C'è qualcosa che non va, hai dimenticato di compilare qualche campo";
        //event.preventDefault() impedisce che il form venga lanciato se c'è qualcosa che non è a posto
        event.preventDefault();
    }else{
  
        demo.innerHTML = "Informazioni acquisite";
    }
}

btn.addEventListener("click", controlla);


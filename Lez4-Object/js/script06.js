//Il setInterval permette di lanciare una funzione ogni tot di millisecondi stabiliti
setInterval(() => {

    let oraEsatta = new Date();
    
    let ora = oraEsatta.getHours();
    let min = oraEsatta.getMinutes();
    let sec = oraEsatta.getSeconds();
    
    let oraAttuale = ora + ":" + min + ":" + sec;
    
    let orologio = document.getElementById("orologio");
    orologio.innerHTML = oraAttuale;
}, 1000);


setInterval(()=>{
    console.log("Ciao");
}, 1000);



function miaFunz(){
    console.log("Dario");
}

setInterval(miaFunz, 1000);
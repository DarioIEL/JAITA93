for(let i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i + " Zoom Boom !!");
    }else if(i%3 == 0){
        console.log(i + " Zoom");
    }else if(i % 5 == 0){
        console.log(i + " Boom");
    }else{
        console.log(i);
    }
}


// for(let i = 1; i <= 100; i++){
//     if(i%5 == 0){
//         console.log(i + " Boom");
//     }else if(i%3 == 0){
//         console.log(i + " Zoom");
//     }else if(i % 5 == 0 && i % 3 == 0){
//         console.log(i + " Boom Zoom !!");
//     }else{
//         console.log(i);
//     }
// }
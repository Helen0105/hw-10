// let minutesLeft = 3;
// const minutes = document.querySelector(".timer");
// const minutesTimer = setInterval(() => {
//     minutesLeft--
//     if (minutesLeft === 1){
//         alert("залишилася 1 хвилина");
//     }
// })





// let minutesLeft = 3;
// const minutesDisplay = document.querySelector(".timer"); 

// const minutesTimer = setInterval(() => {
//     minutesLeft--;

    
//     if (minutesDisplay) {
//         minutesDisplay.textContent = `Залишилось ${minutesLeft} хвилини`;
//     }

//     if (minutesLeft === 1) {
//         alert("Залишилася 1 хвилина");
//     }

// }, 60000); 


let secondsLeft = 30;
const secondsDisplay = document.querySelector(".timer2");

const secondsTimer = setInterval(() => {
    secondsLeft--;

    
    if (secondsDisplay) {
        secondsDisplay.textContent = `Залишилось ${secondsLeft} секунд`;
    }

    if (secondsLeft === 10) {
        alert("Залишилася 10 секунд");
    }

    if (secondsLeft === 0) {
        alert("час вийшов!!!!!!!");
    }

    

}, 1000); 

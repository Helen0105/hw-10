// let minutesLeft = 3;
// const minutes = document.querySelector(".timer");
// const minutesTimer = setInterval(() => {
//     minutesLeft--
//     if (minutesLeft === 1){
//         alert("залишилася 1 хвилина");
//     }
// })





// // let minutesLeft = 3;
// // const minutesDisplay = document.querySelector(".timer"); 

// // const minutesTimer = setInterval(() => {
// //     minutesLeft--;

    
// //     if (minutesDisplay) {
// //         minutesDisplay.textContent = `Залишилось ${minutesLeft} хвилини`;
// //     }

// //     if (minutesLeft === 1) {
// //         alert("Залишилася 1 хвилина");
// //     }

// // }, 60000); 


// let secondsLeft = 30;
// const secondsDisplay = document.querySelector(".timer2");

// const updateDisplay = (time) => {
//     if (secondsDisplay) {
//         secondsDisplay.textContent = `Залишилося ${time} секунд`;
//     }
// };


// updateDisplay(secondsLeft);

// const secondsTimer = setInterval(() => {
//     secondsLeft--;
//     updateDisplay(secondsLeft);

//     if (secondsLeft === 10) {
//         alert("Залишилося 10 секунд");
//     }

//     if (secondsLeft <= 0) {

//         clearInterval(secondsTimer);
//         alert("Час вийшов!!!!!!!");
//     }
// }, 1000);












let minutesLeft = 3;
const minutesDisplay = document.querySelector(".timer");

const minutesTimer = setInterval(() => {
    minutesLeft--;
    if (minutesDisplay) {
        minutesDisplay.textContent = `Залишилося: ${minutesLeft} хвилини`;
    }

    if (minutesLeft === 2) {
        alert("Залишилося 2 хвилини");
    }

    if (minutesLeft <= 0) {
        clearInterval(minutesTimer);
        alert("Час першого таймера вийшов!");
    }
}, 60000);






let secondsLeft = 30;
const secondsDisplay = document.querySelector(".timer2");

const updateSecondsDisplay = (time) => {
    if (secondsDisplay) {
        secondsDisplay.textContent = `Залишилося: ${time} секунд`;
    }
};

const secondsTimer = setInterval(() => {
    secondsLeft--;
    updateSecondsDisplay(secondsLeft);

    if (secondsLeft === 10) {
        alert("Залишилося 10 секунд");
    }

    if (secondsLeft <= 0) {
        clearInterval(secondsTimer);
        alert("Час другого таймеру вийшов!!");
    }
}, 1000);